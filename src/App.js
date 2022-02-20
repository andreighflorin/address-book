import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Form from './components/Form'
import List from './components/List'
import Search from './components/Search'
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [maxLimit, setmaxLimit] = useState(false);

  useEffect(() => {
    if (data.length >= 300) {
      console.log('DB is full!');
      setmaxLimit(true);
    }
  }, [data]);

  const updateState = (name, phone) => {
    setData((prevData) => {
      return [...prevData, {'name': name,'phone': phone}];
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={!maxLimit && <Form data = {data} update = {updateState} />} />
          <Route path="/list" element={<List data = {data} />} />
          <Route path="/search" element={<Search data = {data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
