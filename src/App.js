
import './App.css';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm';
import { useState } from 'react'
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({message: message, type: type});
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  const toggleMode = () => {
    if(mode === 'light') { 
      setMode('dark')
      showAlert("Dark Mode is Enabled", "success")
      document.body.style = 'background: #6c757d;';
    }
    else{ 
      setMode('light') 
      showAlert("Light Mode is Enabled", "success")
      document.body.style = 'background: white;';
    }
    console.log(mode)
  }
  console.log(alert)
  return (
    <>
      <Navbar mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
