
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './Routes'
import './App.css'
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}



export default App;
