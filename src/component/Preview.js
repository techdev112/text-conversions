import React from 'react';

export default function Preview({text}) {
  return (
    <>
			<h1>Preview</h1>
      <p>{text ? text : "Your test will be shown here"}</p>
    </>
  );
}
