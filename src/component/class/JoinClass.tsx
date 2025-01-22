import './Class.css'

const JoinClass = () => {
  return (
    <div className="popup">
        <div className="join-class">
            <h2>Join class</h2>
            <div className='join-class--container'>
                <p className='join-class--h'>Class code</p>
                <p className='join-class--p'>Ask your teacher for the class code, then enter it here.</p>
                <form>
                    <input type="text" placeholder="Class Code" required/>
                </form>
            </div>
            <p className='join-class--p'>To sign in with a class code</p>
            <ul className='join-class--instruction'>
                <li>Use an authorised account</li>
                <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
            </ul>
            <p className='join-class--p'>
                If you have trouble joining the class, go to the <a href="https://support.google.com/edu/classroom/answer/15605102">Help Centre article</a>
            </p>

            <div className='join-class--form-actions'>
                <button>
                    Cancel
                </button>
                <button type='submit'>
                   Join
                </button>
            </div>
        </div>
    </div>
  )
}

export default JoinClass
