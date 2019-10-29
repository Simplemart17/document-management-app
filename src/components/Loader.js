import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import './scss/Loader.scss';

const Loader = () => (
  <div className='loading'>
    <ScaleLoader
      sizeUnit={'px'}
      color={'#4d7b51'}
      height={60}
      width={6}
      radius={2}
      margin={'6px'}
    />
  </div>
);

export default Loader;
