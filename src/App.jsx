
import './App.css';
import Add from './pages/Add';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from './pages/Update';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
