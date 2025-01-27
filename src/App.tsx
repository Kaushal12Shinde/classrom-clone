import { useState } from 'react';
import './App.css'
import Navbar from './component/navbar/Navbar'
import Sidebar from './component/sidebar/Sidebar'
import ClassCard from './component/class/ClassCard';
// import JoinClass from './component/class/JoinClass';
// import CreateClass from './component/class/CreateClass';

function App() {

  const [openSidebar,setOpenSidebar] = useState<boolean>(true);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  return (
    <>
     <Navbar handleSidebar={handleSidebar}/>
     <div className='screen'>
      <Sidebar openSidebar={openSidebar} />
      <div className='main-screen'>
          <ClassCard/>
      </div>
     </div>
     {/* <CreateClass/> */}
     {/* <JoinClass/> */}
    </>
  )
}

export default App
