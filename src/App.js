import Home from './Containers/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
