import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from '../constants/routes';
import { doesUsernameExist } from "../services/firebase";
const SignUp = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === '';

    const handleSignup = async (event) => {
        event.preventDefault();
        const usernameExists = await doesUsernameExist(username)
        console.log('username exists', usernameExists);
        if(!usernameExists.length){
            try {
                const createdUserResult = await firebase
                .auth()
                .createUserWithEmailAndPassword(emailAddress, password)

                // authentication 
                await createdUserResult.user.updateProfile({
                    displayName: username
                })

                // firebase user collection create 
                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress:emailAddress.toLowerCase(),
                    following:[],
                    dateCreated: Date.now()
                })
                history.push(ROUTES.DASHBOARD)
            } catch (error) {
                setEmailAddress('')
                setPassword('')
                setUsername('')
                setFullName('')
                setError(error.message)
            }
        }else{
            setError('Username is taken!!!')
        }
        
    };

    useEffect(() => {
        document.title = 'Sign up - Instagram'
    },[])
    return (
      <div className="container flex mx-auto max-w-screen-md items-center h-screen">
         <div className="flex w-3/5">
             <img className="max-w-full" src="/images/iphone-with-profile.jpg" alt="iphone with profile"/>
         </div>
         <div className="flex flex-col w-2/5">
             <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
             <h1 className="flex justify-center w-full">
                 <img src="images/logo.png" alt="instagram" className="mt-2 mb-4 w-6/12"
                 />
             </h1>
             {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
             <form onSubmit={handleSignup} method="POST">
                <input 
                 aria-label="Enter your Full Name"
                 type="text"
                 placeholder="Full Name"
                 className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                 onChange={({target}) => setFullName(target.value)}
                 value={fullName}
                 />
                <input 
                 aria-label="Enter your Username"
                 type="text"
                 placeholder="Username"
                 className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                 onChange={({target}) => setUsername(target.value)}
                 value={username}
                 />
                 <input 
                 aria-label="Enter your email address"
                 type="text"
                 placeholder="Email"
                 className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                 onChange={({target}) => setEmailAddress(target.value)}
                 value={emailAddress}
                 />

                <input 
                 aria-label="Enter your password"
                 type="password"
                 placeholder="Password"
                 className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                 onChange={({target}) => setPassword(target.value)}
                 value={password}
                 />

                 <button disabled={isInvalid}
                 type="submit"
                 className={`bg-blue-medium w-full rounded h-8 font-bold text-white ${isInvalid && `opacity-50`}`}>Sign Up</button>
             </form>
         </div>
        
         <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
             <p className="text-sm">
                 Have an account?{` `}
                 <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">Login</Link>
             </p>
         </div>
         </div>
      </div>
    )
}

export default SignUp


