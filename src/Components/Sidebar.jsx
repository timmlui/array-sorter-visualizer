import './Sidebar.scss';

import AutorenewIcon from '@material-ui/icons/Autorenew';
import HeightIcon from '@material-ui/icons/Height';
import SortIcon from '@material-ui/icons/Sort';
import SpeedIcon from '@material-ui/icons/Speed';

function Sidebar(props) {
  const { changeArraySize, changeSortSpeed, refreshArray, sort } = props;

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="item item-clickable" onClick={() => refreshArray()}>
          <div className="icon"> <AutorenewIcon /> </div>
          <div className="title"> Refresh Array </div>
        </li>
        <li className="item array-size">
          <div className="icon"> <HeightIcon /> </div>
          <div className="title"> Array Size </div>
          <input
            className="changeSize"
            id="changeSize"
            type="range"
            min="2"
            max="100"
            onChange={e => changeArraySize(e.target.value)}
          />
        </li>
        <li className="item sort-speed">
          <div className="icon"> <SpeedIcon /> </div>
          <div className="title"> Sorting Speed </div>
          <input
            className="sortSpeed"
            id="sortSpeed"
            type="range"
            min="1"
            max="100"
            onChange={e => changeSortSpeed(e.target.value)}
          />
        </li>
        <li className="item">
          <div className="icon"> <SortIcon /> </div>
          <div className="title"> Sorting Algorithms </div>
        </li>
        <li className="item item-clickable" onClick={() => {}}>
          <div className="icon"></div>
          <div className="title"> Merge Sort </div>
        </li>
        <li className="item item-clickable" onClick={() => {}}>
          <div className="icon"></div>
          <div className="title"> Quick Sort </div>
        </li>
        <li className="item item-clickable" onClick={() => sort('heap')}>
          <div className="icon"></div>
          <div className="title"> Heap Sort </div>
        </li>
        <li className="item item-clickable" onClick={() => sort('bubble')}>
          <div className="icon"></div>
          <div className="title"> Bubble Sort </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar