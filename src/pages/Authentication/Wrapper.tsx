import React from 'react';
import { Outlet } from 'react-router-dom';

function Wrapper() {
  return (
    <div className="card card-bordered grid grid-cols-3 bg-base-100 shadow-2xl">
      <div className="w-40"></div>
      <div className="divider divider-horizontal"></div>
      <Outlet />
    </div>
  );
}

export default Wrapper;
