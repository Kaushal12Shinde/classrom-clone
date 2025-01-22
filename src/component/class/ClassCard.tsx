import './Class.css'
const ClassCard = () => {
  return (
    <>
      <div className="class-card">
        <div className='class-card--details'>
          <div className='details'>
            <p className='details--name'>
              Physics
            </p>
            <p className='details--section'>
              Sem 1
            </p>
            <p className='details--ta'>
              Mr. Smith
            </p>
          </div>
          <button className='details--actions'>
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill='#fff' d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
          </button>
        </div>
        <div className='class-card--space'>

        </div>
        <div className='class-card--shortcuts'>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"></path><path d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"></path></svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default ClassCard