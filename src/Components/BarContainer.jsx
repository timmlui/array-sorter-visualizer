import React, { useEffect, useState, useRef } from 'react';

import './BarContainer.scss';

function Bar(props) {
  const { arr, value, sortedValues, sortStateValues, finishedSorting } = props;
  const { compareA, compareB, swapped } = sortStateValues;

  const height = value * (window.innerHeight/120);
  const width = (window.innerWidth/(arr.length*3));

  let backgroundColor = (value === compareA || value === compareB) ? swapped ? '#479647' : '#b39249' : '#e8e8e8';

  if (sortedValues.includes(value) || finishedSorting) {
    backgroundColor = '#479647';
  }

  // const translateValue = swapped && (value === compareA) ? `translate(${width + 3}px)` : swapped && (value === compareB) ? `translate(${width * -1 - 3}px)` : '';

  // console.log('translateValue',translateValue)

  return (
    <div
      className="bar"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: backgroundColor
        // backgroundColor: (value === compareA || value === compareB) ? 'green' : '#e8e8e8',
        // transform: translateValue
        // transform: swapped ? (value === compareA) && `translate(${width}px)` : ''
      }}
    >
      <div
        className="bar-value"
        // style={{ bottom: -value*(window.innerHeight/120)+'px'}}
      >
        {value}
      </div>
    </div>
  )
}

function BarContainer(props) {
  const { arr, sortStateValues } = props;

  const bars = arr.map((value, key) => (
    <Bar key={key} value={value} {...props}></Bar>
  ));

  return (
    <div className="bar-container">
      {bars}
    </div>
  )
}

export default BarContainer