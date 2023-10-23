import Card from "../components/atom/Card"
import Container from "../components/atom/Container"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import {useState} from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword ] = useState('')
  const [invalidUsernameError, setInvalidUsernameError] = useState('')
  const [invalidPasswordError, setInvalidPasswordError] = useState('')
  
  
  const handleUsernameChange = (ev: any) => {
    setUsername(ev.target.value)
  }
  const handlePasswordChange = (ev: any) => {
    setPassword(ev.target.value)
  }
  const resetErrorMsgs = ()=>{
    setInvalidUsernameError('')
    setInvalidPasswordError('')
  }
  const handleLogin = () => {
    resetErrorMsgs()

    
    const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{1,29}$/;
    if(!usernameRegex.test(username)){
      setInvalidUsernameError('Invalid Username')
      return
    }
    if(password.length == 0){
      setInvalidPasswordError('Empty Password')
      return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(password)){
      setInvalidPasswordError('Invalid Password')
      return
    }
    
    
  }
 
  return (
    <Container>
      <Card customCss="mx-auto my-2">
        <div className="border-b border-gray-200 pb-2 mb-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Login</h3>
        </div>
        <div className="mx-auto max-w-sm">
        <label
             htmlFor="username"
             className="block text-sm font-medium leading-6 text-gray-900">
             Username
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
             type="text"
             name="Password"
             id="password"
             className= {` ${invalidUsernameError ? "placeholder: text-red-500 focus: ring-red-500" : ""} block w-full mb-2 rounded-md border-0 py-1.5 pr-10 ring-1 p-2 placeholder:`}
             placeholder="Username"
             value={username}
            //  aria-onInvalid="true"
             aria-describedby="username-error"
             onChange={handleUsernameChange}
            />
            {invalidUsernameError &&(
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500"
               aria-hidden="true" />
            </div>
            )}
            {invalidUsernameError && (
              <p className=" mt-2 text-sm text-red-600" id="password-error">
                {invalidUsernameError}
              </p>
            )}
          </div>
          <label
             htmlFor="password"
             className="block text-sm font-medium leading-6 text-gray-900">
             Password
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
             type="password"
             name="Password"
             id="password"
             className= {` ${invalidPasswordError ? "placeholder: text-red-500 focus: ring-red-500" : ""} block w-full mb-2 rounded-md border-0 py-1.5 pr-10 ring-1 p-2 placeholder:`}
             placeholder="Password"
             value={password}
            //  aria-onInvalid="true"
             aria-describedby="password-error"
             onChange={handlePasswordChange}
            />
            {invalidPasswordError &&(
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500"
               aria-hidden="true" />
            </div>
            )}
            {invalidPasswordError && (
              <p className=" mt-2 text-sm text-red-600" id="password-error">
                {invalidPasswordError}
              </p>
            )}
          </div>
          <div className=" flex justify-center">
            <button type="button" onClick={handleLogin} className=" flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ">
              Login
            </button>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Login
