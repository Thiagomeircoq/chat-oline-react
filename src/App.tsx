import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Contact from './pages/Contact';
import Config from './pages/Config';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 w-full h-screen flex">
        <div className='h-screen border-r border-gray-600'>
          <Sidebar />
        </div>
        <div className='h-screen w-full'>
          <Routes>
            <Route path='/chat' element={<Chat />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/config' element={<Config />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
