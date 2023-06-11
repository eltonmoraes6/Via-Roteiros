import React from 'react';
import '../styles/spinner.css';

export default function LoadingSpinner(props) {
  return (
    <div className='spinner-container'>
      <div className='loading-spinner'>{`${Math.round(props.value)}%`}</div>
    </div>
  );
}
