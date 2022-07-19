
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React ,{useState} from 'react';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light");//wether dark mode is enabled or not
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert(
      {
        msg:message ,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);



  }

  const toggleMode =() => {
    if(mode === 'light'){
     setMode('dark') ;
     document.body.style.background = '#042743';
     showAlert("Dark Mode has Been Enabled" , "success");
    }
    else{
     setMode("light"); 
     document.body.style.background = "white";
     showAlert("Light Mode has Been Enabled", "success");
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="TextUtils-Words Counter | Character Counter"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
