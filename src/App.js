import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import View from './component/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
