import Form from './components/Form';
import Merci from './components/Merci';
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inscription' element={<Form/>}/>
        <Route path={'/merci/:name'} element={<Merci />}/>
        <Route path="/" element={<Navigate to="/inscription" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
