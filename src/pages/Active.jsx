import React from 'react';
import Modelcard from './Modelcard';

const Active = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <h1>Latest</h1>
      <div className=' grid grid-cols-3'>
        {
          data.map(model => <Modelcard key={model._id} model={model} />)
        }
      </div>
    </div>
  );
};

export default Active;
