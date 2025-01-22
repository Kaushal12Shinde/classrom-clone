import './Sidebar.css'
import {useState} from 'react'

type SidebarProps = {
  openSidebar:boolean,
}

const Sidebar:React.FC<SidebarProps> = ({openSidebar}) =>{

  const [accordionState, setAccordionState] = useState<
    {
      teaching:boolean;
      enrolled:boolean;
    }
  >({
    teaching: true,
    enrolled: true,
  });

  type AccordionKey = 'teaching' | 'enrolled';

  const toggleAccordion = (accordion: AccordionKey) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };


  return (
    <>
      <div className={`sidebar ${openSidebar ? 'active': 'deactive'}`}>
        <div className="sidebar-sec">
          <div className='tab'>
            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path fill='#5f6368' d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"></path></svg>
            <p className='tab-head'>Home</p>
          </div>
        </div>
        <div className="sidebar-sec">
          <div className='tab tab-accordion' onClick={()=> toggleAccordion('teaching')}>
            <svg className={`tab-acc-arrow ${accordionState.teaching ? 'open': ''}`}  width="24" height="24" viewBox="0 0 24 24"><path fill='#5f6368' d="M10 17l5-5-5-5v10z"></path></svg>
            <svg width="24" height="24" viewBox="0 0 24 24"><circle fill='#5f6368' cx="17" cy="12.5" r="2.5"></circle><path fill='#5f6368' d="M17 15.62c-1.67 0-5 .84-5 2.5V20h10v-1.88c0-1.66-3.33-2.5-5-2.5zM10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm1.82 9.17c.01 0 0 0 0 0zM10 13c-2.67 0-8 1.34-8 4v3h8v-2H4v-.99c.2-.72 3.3-2.01 6-2.01.6 0 1.22.07 1.82.17h.01l2.07-1.55c-1.39-.41-2.85-.62-3.9-.62z"></path></svg>
            <p className='tab-head'>Teaching</p>
          </div>
          { accordionState.teaching && (
              <div className='nested-classes'>
                <div className='tab'>
                  <p className='class-profile'>S</p>
                  <div className='class-origin'>
                    <p className='class-subject'>Physics</p>
                    <p className='class-div'>11 A</p>
                  </div>
                </div>
                <div className='tab'>
                  <p className='class-profile'>S</p>
                  <div className='class-origin'>
                    <p className='class-subject'>Physics</p>
                    <p className='class-div'>11 A</p>
                  </div>
                </div>
              </div>) 
          }
        </div>
        
        <div className="sidebar-sec">
          <div className='tab tab-accordion' onClick={()=> toggleAccordion('enrolled')} >
            <svg className={`tab-acc-arrow ${accordionState.enrolled ? 'open': ''}`} width="24" height="24" viewBox="0 0 24 24"><path fill='#5f6368' d="M10 17l5-5-5-5v10z"></path></svg>
            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path fill='#5f6368' d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path></svg>
            <p className='tab-head'>Enrolled</p>
          </div>
          { accordionState.enrolled && (
            <div className={`nested-classes`}>
              <div className='tab'>
                <p className='class-profile'>S</p>
                <div className='class-origin'>
                  <p className='class-subject'>Physics</p>
                  <p className='class-div'>11 A</p>
                </div>
              </div>
              <div className='tab'>
                <p className='class-profile'>S</p>
                <div className='class-origin'>
                  <p className='class-subject'>Physics</p>
                  <p className='class-div'>11 A</p>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default Sidebar
