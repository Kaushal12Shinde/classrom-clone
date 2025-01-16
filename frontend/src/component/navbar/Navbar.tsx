import './Navbar.css'
function Navbar() {
  return (
    <>
        <nav className="nav">
          <ul>
            <li>
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
              </button>
            </li>
            <li className='nav-logo'>
              <img src="https://www.gstatic.com/classroom/logo_square_rounded.svg" alt="" />
              <p>Classroom</p>
            </li>
          </ul>
          <ul>
            <li>
              <button>
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg>
              </button>
            </li>
            <li className='profile'>
              <img src="https://lh3.googleusercontent.com/ogw/AF2bZygk7O7WHXd7-giLtuhLIvyWURZ0ezO1r9PqiYmJvLQAQgA=s64-c-mo" alt="" />
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar
