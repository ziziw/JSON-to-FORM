import Form from './components/Form';
import Merci from './components/Merci';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inscription' element={<Form/>}/>
        <Route path={'/merci/:name'} element={<Merci />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
