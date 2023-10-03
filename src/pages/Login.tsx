import Card from "../components/atom/Card"
import Container from "../components/atom/Container"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import {useEffect, useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('')
  const [invalidEmailError, setInvalidEmailError] = useState('')
  const [invalidPasswordError, setInvalidPasswordError] = useState('')
  
  const handleEmailChange = (ev: any) => {
    setEmail(ev.target.value)
  }
  const handlePasswordChange = (ev: any) => {
    setPassword(ev.target.value)
  }
  const resetErrorMsgs = ()=>{
    setInvalidEmailError('')
    setInvalidPasswordError('')
  }
  const handleLogin = () => {
    resetErrorMsgs()

    if(email.length == 0){
      setInvalidEmailError('Empty Email')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      setInvalidEmailError('wrong format')
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
        <div className="mx-auto max-w-sm">
          <label
           htmlFor="email"
           className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
             type="email"
             name="email"
             id="email"
             className= {` ${invalidEmailError ? "  placeholder: text-red-500 focus: ring-red-500" : ""} block w-full rounded-md border-0 py-1.5 pr-10 ring-1 p-2 placeholder:`}
             placeholder="Email"
             value={email}
             aria-onInvalid="true"
             aria-describedby="email-error"
             onChange={handleEmailChange}
            />
            {invalidEmailError &&(
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500"
               aria-hidden="true" />
              </div>
            )}
            {invalidEmailError && (
              <p className=" mt-2 text-sm text-red-600" id="email-error">
                {invalidEmailError}
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
             aria-onInvalid="true"
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
              click me
            </button>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Login
