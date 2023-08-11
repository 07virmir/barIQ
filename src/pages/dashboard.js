import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/dashboard.css';

const Dashboard = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/test');
      const data = response.data;
      const updatedData = [];

      let total = 0;

      for (const [key, value] of Object.entries(data)) {
        const brand = key.substring(2, key.length - 1);
        updatedData.push({ brand, count: value });
        total += value;
      }

      setInventoryData(updatedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='background'>
      <div id='header'>
        <div id='title'>
          <p>Overview</p>
        </div>
        <div id='upload'>
          <button type='button' onClick={fetchData}>
            Update Page
          </button>
          <p></p>
        </div>
      </div>
      <div className='inventory'>
        <div className='box'>
          <div className='text'>
            <p>Total Inventory</p>
            <p>{inventoryData.reduce((sum, item) => sum + item.count, 0)}</p>
          </div>
        </div>
        {inventoryData.map((item, index) => (
          <div key={index} className='box'>
            <div className='text'>
              <p>{item.brand}</p>
              <p>{item.count}</p>
            </div>
          </div>
        ))}
      </div>
      <p></p>
      <p></p>
      <table id='analytics'>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Total Pallets</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
