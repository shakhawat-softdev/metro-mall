import React from 'react';
import './Title.css'

const Title = ({ title }) => {
  return (
    <div className='title-container'>
      <span className='headline'>{title}</span>

      <hr className="horizontalLine title-border-bottom w-100" style={{ margin: "0 !important" }} />
    </div>
  );
};

export default Title;