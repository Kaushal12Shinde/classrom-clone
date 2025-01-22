import './Class.css'
const CreateClass = () => {
  return (
    <div className="popup">
      <div className="create-class">
        <h2>Create Class</h2>
        <form className='create-class--form'>
            <input className='class-name' type="text" placeholder='Class Name (required)' required/>
            <input className='class-section' type="text" placeholder='Section' />
            <input className='room' type="text" placeholder='Room' />
            <div className='create-class--form-actions'>
                <button>
                    Cancel
                </button>
                <button type='submit'>
                    Create
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreateClass
