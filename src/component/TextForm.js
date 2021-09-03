import React, {useState} from 'react';
import PrimaryButton from './Button';
import Preview from './Preview';
import ShowText from './ShowText';

export default function TextForm({ mode ,showAlert }) {
	const [text, setText] = useState("")
	const handleUpClick = () => {
		setText(text.toUpperCase())
		showAlert("Succesfully Converted to UpperCase", "success")
	}
	const handleLoClick = () => {	
		setText(text.toLowerCase())
		showAlert("Successfully Converted to LowerCase", "success")
	}

	const handleClearClick = () => {
		setText("")
		showAlert("SucessFully cleared the text", "success")
	}
  return (
    <>  
			<div className = "container my-3" style={{color: mode === 'dark' && "#fff"}}>      
				<div className="mb-3">
					<h1> Enter the Text Analyzer</h1>
					<textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: mode === 'dark' && "#6c757d", color: mode === 'dark' && '#fff'}} rows="8" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
				</div>
				<PrimaryButton handleClick={handleUpClick} title={"Convert to UpperCase"}></PrimaryButton>
				<PrimaryButton handleClick={handleLoClick} title={"Convert to LowerCase"}></PrimaryButton>
				<PrimaryButton handleClick={handleClearClick} title={"Clear Text"}></PrimaryButton>
				<div className ="my-3">
					<ShowText text = {text} />
					<Preview  text = {text}/>
				</div>
			</div>
			
    </>
  );
}
