import React from 'react';

export default function PrimaryButton({title, handleClick}) {
  return (
    <>
        <button className="btn btn-primary mx-1" onClick={handleClick}>{title}</button>
    </>
  );
}
