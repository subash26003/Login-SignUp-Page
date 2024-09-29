import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Model from './components/Modal/Model'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  
  const [success,setSuccess] = useState(false)
  
  useEffect(() =>{
    let container = document.getElementById('container')
    setTimeout(() => {
      container.classList.add('sign-in')
    }, 200)
  },[])

const toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}



  return (
    <div className='app-card'>
      {/* <div className={`login-container w-9/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-auto ${loginClass}`}> 
        <Login setLogin={setLogin} setSuccess={setSuccess}/>
      </div>
      <div className={`signup-container w-9/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-auto ${signupClass}`}>
        <SignUp setLogin={setLogin} setSuccess={setSuccess} />
      </div>
      {success && <Model setSuccess={setSuccess} />}  */}
     <div id="container" className="container">
	
		<div className="row">
		
			<div className="col align-items-center flex-col sign-up">
				<div className="form-wrapper align-items-center">
					<div className="form sign-up">
              <SignUp toggle={toggle} setSuccess={setSuccess}/>
					</div>
				</div>
			
			</div>

			<div className="col align-items-center flex-col sign-in">
				<div className="form-wrapper align-items-center">
					<div className="form sign-in">
          <Login toggle={toggle} setSuccess={setSuccess}/>
					</div>
				</div>
				<div className="form-wrapper">
		
				</div>
			</div>
	
		</div>
	
		<div className="row content-row">
			
			<div className="col align-items-center flex-col">
				<div className="text sign-in">
					<h2>
						Welcome
					</h2>
	
				</div>
				<div className="img sign-in">
		
				</div>
			</div>
		
			<div className="col align-items-center flex-col">
				<div className="img sign-up">
				
				</div>
				<div className="text sign-up">
					<h2>
						Join with us
					</h2>
	
				</div>
			</div>
			
		</div>
		
	</div>
	{success && <Model setSuccess={setSuccess} />} 
      
    </div>
  )
}

export default App
