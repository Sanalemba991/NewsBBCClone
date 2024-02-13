import React, { useEffect, useState } from 'react';

function Ram() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/2/")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='bg-blue-200 p-4 rounded-lg'>
      <h4 className='text-xl font-semibold mb-2'>{data.name}</h4>
      <p className='mb-2'>Population: {data.population}</p>
      <p className='mb-2'>Gravity: {data.gravity}</p>
      <p>Climate: {data.climate}</p>
    </div>
  );
}

export default Ram;
