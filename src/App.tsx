import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import { Index } from './views/Index'
import '@fontsource/roboto/300.css';
import { Chararter } from './components/Chararter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chararter" element={<Chararter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
