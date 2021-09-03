import React from 'react';

export default function ShowText({ text }) {
  return (
    <>
      <h1> You Text Summary</h1> 
      <p> {text.split(" ").length} words and {text.length} character.</p>
			<p> The time taken to read is  {0.008*text.split(" ").length}</p>
    </>
  );
}

