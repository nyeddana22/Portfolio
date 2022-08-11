import './App.css';
import Navbar from './components/Navbar/Navbar'
import Aboutme from './Pages/Aboutme';
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Blog from './Pages/Blog'
import Landing from './Pages/Landing'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Landing />} />
        <Route path='/aboutme' element={<Aboutme/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
      
    
    </div>
  );
}

export default App;
