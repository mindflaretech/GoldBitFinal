// pages/index.js
import React, { useEffect, useState } from 'react';
import api from './api';

const PriceAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/current', {
          params: {
            city: 'Karachi',
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{backgroundColor:"red"}}>
      {data}
      <ul>
        {data.map(item => (
          <li key={item.city_name}>
            {`${item.city_name}: ${item.temp}°C, ${item.weather.description}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceAPI;
