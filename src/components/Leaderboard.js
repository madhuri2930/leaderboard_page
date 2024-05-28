import React from 'react';
import './Leaderboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons/faRankingStar';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons/faIndianRupee';
import './image/content_delivery_14-1.jpg'


 const Leaderboard = () => {
    const data = [
        { id: 1, name: 'Alice', age: 25, profit:23829,avg:2234 ,win:0.24, price:'-', action: 'View'},
        { id: 2, name: 'Bob', age: 30, profit:12045,avg:1235,win:5.62, price:50,action:"buy" },
        { id: 3, name: 'Charlie', age: 35, profit:23829, avg:2234 ,win:0.24, price:'-', action: 'View'},
        { id: 4, name: 'Bob', age: 30, profit:12045 ,avg:1235,win:5.62, price:50,action:"buy"},
        { id: 5, name: 'Alice', age: 25, profit:23829,avg:2234 ,win:0.24, price:'-', action: 'View'},
        { id: 6, name: 'Alice', age: 25, profit:23829,avg:2234 ,win:0.24, price:'-', action: 'View'},
        { id: 7, name: 'Bob', age: 30, profit:12045,avg:1235,win:5.62, price:50,action:"buy" },
        { id: 8, name: 'Bob', age: 30, profit:12045,avg:1235,win:5.62, price:50,action:"buy" },
        { id: 9, name: 'Alice', age: 25, profit:23829,avg:2234 ,win:0.24, price:'-', action: 'View'},

      ];
  return (
    <div className='main-container'>
    <h1 className='leaderboard-heading'>Leaderboard</h1>
    <hr className='hr-line'/>
        <div className='basic-container'>
            <p className='basic-text'>Basic Backtest</p>
            <div className='slip-cont'>
            <label htmlFor ="fruits" className='labelText'>Slippage</label>
    <select id="fruits" name="fruits" className='slippage'>
    <option value="banana"></option>
        <option value="banana">0%</option>
        <option value="cherry">0.5%</option>
        <option value="date">1%</option>
    </select>
            </div>
        </div>
        <hr className='hr-line2'/>
        <div className='table-container'>
        <table>
            <thead className='t-head'>
            <tr className='table-heading'>
            
    <th><FontAwesomeIcon icon={faRankingStar} className='rank-icon' />Rank</th>
    <th>Name<FontAwesomeIcon className='dwn-arrow' icon={faCaretDown}/></th>
    <th>calmar Ratio</th>
    <th>Overall Profit</th>
    <th>Avg.Daily Profit</th>
    <th>Win %(Day)</th>
    <th>Price <FontAwesomeIcon icon={faIndianRupee} /></th>
    <th>Action <FontAwesomeIcon className='action-up-arrow' icon={faCaretUp}/><FontAwesomeIcon className='action-dwn-arrow' icon={faCaretDown}/></th>

  </tr>
            </thead>
  <tbody>
  {data.map((row) => (
          <tr key={row.id} className='row-data'>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.profit}</td>
            <td>{row.avg}</td>
            <td>{row.win}</td>
            <td>{row.price}</td>
            <td><a href='https://unfluke.in/login' rel="noreferrer" target='_blank' className='a-tag'>{row.action}</a></td>
          </tr>
        
        ))}
        
        
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Leaderboard;
