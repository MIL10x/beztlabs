'use client'

import React from "react";

const Error = ({
  reset
}) => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
      <p>Page is not found</p>
      <button onClick={()=>reset()}></button>
    </div>
  );
};

export default Error;
