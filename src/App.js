import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const[mode,setMode] = useState('light')

const[alert,setAlert] = useState(null)

const showAlert=(messege, type)=>{
     setAlert({
              msg:messege,
              type:type  
})
setTimeout(() => {
  setAlert(null)
}, 1500);
}



const toggleMode =()=>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#0d1562';
  showAlert("Dark Mode has been Enabled","success")
}
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light Mode has been Enabled","success")
}
}
  return (
    <>
      <Router>
        <Navbar title="textutil3" link="about" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
         <div className="container my-3">
      <Routes>
          <Route exact path="/about"element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/"element={ <Textform showAlert={showAlert} heading="Try Textutils -Word Counter,Character Counter,Remove Extra Spaces" mode={mode}/>}>
           
          </Route>
      </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
