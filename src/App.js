import React, { useEffect, useState, useRef } from 'react';

import './App.scss';
import Sidebar from './Components/Sidebar';
import BarContainer from './Components/BarContainer';

import bubbleSort from './Algorithms/bubbleSort';
import heapSort from './Algorithms/heapSort';

function App() {
  const [arraySize, setArraySize] = useState(50);
  const [arr, setArray] = useState(createRandomArray(arraySize));
  const [sortSpeed, setSortSpeed] = useState(50);
  const [sortStateValues, setSortStateValues] = useState({});

  const sortingAnimationTimer = useRef(null);
  const sortedArrObj = useRef({});
  const isSorting = useRef(false);
  const finishedSorting = useRef(false);
  const i = useRef(0);

  const sortedValues = useRef([]);

  useEffect(() => {
    setArray(createRandomArray(arraySize));
  }, [arraySize]);

  // Create a random array of <length> numbers ranged 1 to 100.
  function createRandomArray(length) {
    const arr = [];

    while (arr.length < length) {
      const el = Math.floor(Math.random() * 100) + 1;
      if (!arr.includes(el)){
        arr.push(el);
      }
    }
    return arr;
  }

  function changeArraySize(value) {
    reset();
    setArraySize(value);
  }

  function changeSortSpeed(value) {
    clearInterval(sortingAnimationTimer.current);

    // If sorting is in process, restart the animation with the new sort speed
    if (isSorting.current) {
      sortingAnimationTimer.current = setInterval(animateSorting, value);
    }
    setSortSpeed(value);
  }

  function refreshArray() {
    reset();
    setArray(createRandomArray(arraySize));
  }

  function reset() {
    i.current = 0;
    sortedValues.current = [];
    isSorting.current = false;
    finishedSorting.current = false;
    setSortStateValues({});
    clearInterval(sortingAnimationTimer.current);
  }

  function sort(type) {
    reset();
    switch (type) {
      case 'bubble':
        sortedArrObj.current = bubbleSort([...arr]);
        break;
      case 'heap':
        sortedArrObj.current = heapSort([...arr]);
        break;
      default:
        break;
    }

    // Start the animation
    sortingAnimationTimer.current = setInterval(animateSorting, sortSpeed);
  }

  // Animate the sorting by setting a delay (customizable interval) between each array state.
  function animateSorting() {
    const { sortedArr, sortStates } = sortedArrObj.current;

    if (sortStates && sortStates.length && i.current !== sortStates.length) {
      isSorting.current = true;
      if (sortStates.length - 1 === i.current) {
        clearInterval(sortingAnimationTimer.current);
        isSorting.current = false;
        finishedSorting.current = true;
      }
      // Set the array of the current sorting state
      setArray(sortStates[i.current].arr);
      // Set the values of the current sorting state
      setSortStateValues(sortStates[i.current]);

      // Determine when a value is sorted, to be indicated with green color
      const { currMax } = sortStates[i.current];
      if (currMax) {
        sortedValues.current.push(currMax);
      }

      i.current++;
    }
  }

  const sidebarProps = {
    changeArraySize,
    changeSortSpeed,
    refreshArray,
    sort
  }

  const barContainerProps = {
    arr,
    sortStateValues,
    sortedValues: sortedValues.current,
    finishedSorting: finishedSorting.current
  }

  return (
    <div className="App">
      <Sidebar {...sidebarProps}></Sidebar>
      <BarContainer {...barContainerProps}></BarContainer>
    </div>
  );
}

export default App;
