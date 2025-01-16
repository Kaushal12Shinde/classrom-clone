import { useState } from 'react';
import './App.css'
import Navbar from './component/navbar/Navbar'
import Sidebar from './component/sidebar/sidebar'

function App() {

  const [openSidebar,setOpenSidebar] = useState<boolean>(true);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  return (
    <>
     <Navbar handleSidebar={handleSidebar}/>
     <Sidebar openSidebar={openSidebar} />
    </>
  )
}

export default App
