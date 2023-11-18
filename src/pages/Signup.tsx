import Card from "../components/atom/Card"
import Container from "../components/atom/Container"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import {useState} from 'react'
import axios from "axios"
import AppAlert from "../utility/AppAlert"

const Signup = () => {
  const appAlert = AppAlert()
  const [name, setName ] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<number | ''>()
  const [username, setUsername] = useState('')
  const [password, setPassword ] = useState('')
  const [invalidNameError, setInvalidNameError] = useState('')
  const [invalidEmailError, setInvalidEmailError] = useState('')
  const [invalidPhoneError, setInvalidPhoneError] = useState('')
  const [invalidUsernameError, setInvalidUsernameError] = useState('')
  const [invalidPasswordError, setInvalidPasswordError] = useState('')
  
  const handleNameChange = (ev: any) => {
    setName(ev.target.value)
  }
  const handleEmailChange = (ev: any) => {
    setEmail(ev.target.value)
  }
  const handlePhoneChange = (ev: any) => {
    setPhone(ev.target.value)
  }
  const handleUsernameChange = (ev: any) => {
    setUsername(ev.target.value)
  }
  const handlePasswordChange = (ev: any) => {
    setPassword(ev.target.value)
  }
  const resetErrorMsgs = ()=>{
    setInvalidNameError('')
    setInvalidEmailError('')
    setInvalidPhoneError('')
    setInvalidUsernameError('')
    setInvalidPasswordError('')
  }
  const resetInputFields = function () {
    setName('')
    setEmail('')
    setPhone('')
    setUsername('')
    setPassword('')
  }

  const handleSignup = () => {
    resetErrorMsgs()
    // appAlert?.showAlert({message:'signup failed' , type : 'WARNING' , duration : 1000})

    // if (name.length == 0) {
    //   setInvalidNameError('Empty Name')
    //   return
    // }
    // if (name.length > 50) {
    //   setInvalidNameError('Max Length Should Be 50 Characters')
    //   return
    // }
    // if(email.length == 0){
    //   setInvalidEmailError('Empty Email')
    //   return
    // }
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)){
    //   setInvalidEmailError('wrong format')
    //   return
    // }
    // if(phone?.toString().length != 10){
    //   setInvalidPhoneError('Invalid Phone Number')
    //   return
    // }
    // const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{1,29}$/;
    // if(!usernameRegex.test(username)){
    //   setInvalidUsernameError('Invalid Username')
    //   return
    // }
    // if(password.length == 0){
    //   setInvalidPasswordError('Empty Password')
    //   return
    // }
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if(!passwordRegex.test(password)){
    //   setInvalidPasswordError('Invalid Password')
    //   return
    // }
    
    // API call
    axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`,{
      name: name,
      email: email,
      phone : phone,
      username : username,
      password : password
    })
    .then((response) => {
      console.log(response)
      console.log(`hello`)
      if(response.status == 201){
        if (appAlert && appAlert.showAlert){
          appAlert?.showAlert({message: "User Created", type: "SUCCESS", duration: 5000});
          resetInputFields()
        }
      }
    })
    .catch((error) => {
      console.log(error)
      console.log(error.response.status,error.response.data.error)
      if(error.response.status == 400){
        if (appAlert && appAlert.showAlert)
          appAlert?.showAlert({message: error.response.data.error, type: "ERROR", duration: 5000});
      }
    })

  }
 
  return (
    
    <Container>
      <Card customCss="mx-auto my-2">
        <div className="border-b border-gray-200 pb-2 mb-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Sign Up</h3>
        </div>
        <div className="mx-auto max-w-sm">
          {/* name */}
          <label
             htmlFor="name"
             className="block text-sm font-medium leading-6 text-gray-900">
             Name
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
             type="text"
             name="name"
             id="name"
             className= {` ${invalidNameError ? "placeholder: text-red-500 focus: ring-red-500" : ""} block w-full mb-2 rounded-md border-0 py-1.5 pr-10 ring-1 p-2 placeholder:`}
             placeholder="Name"
             value={name}
            //  aria-onInvalid="true"
             aria-describedby="name-error"
             onChange={handleNameChange}
            />
            {invalidNameError &&(
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500"
               aria-hidden="true" />
            </div>
            )}
            {invalidNameError && (
              <p className=" mt-2 text-sm text-red-600" id="password-error">
                {invalidNameError}
              </p>
            )}
          </div>
          {/* email */}
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
            //  aria-onInvalid="true"
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
          {/* phone */}
          <label
             htmlFor="phone"
             className="block text-sm font-medium leading-6 text-gray-900">
             Phone
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
             type="number"
             name="phone"
             id="phone"
             className= {` ${invalidPhoneError ? "placeholder: text-red-500 focus: ring-red-500" : ""} block w-full mb-2 rounded-md border-0 py-1.5 pr-10 ring-1 p-2 placeholder:`}
             placeholder="Phone"
             value={phone}
            //  aria-onInvalid="true"
             aria-describedby="Phone-error"
             onChange={handlePhoneChange}
            />
            {invalidPhoneError &&(
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500"
               aria-hidden="true" />
            </div>
            )}
            {invalidPhoneError && (
              <p className=" mt-2 text-sm text-red-600" id="password-error">
                {invalidPhoneError}
              </p>
            )}
          </div>
          {/* username */}
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
          {/* password */}
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
            <button type="button" onClick={handleSignup} className=" flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ">
              Sign Up
            </button>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Signup
