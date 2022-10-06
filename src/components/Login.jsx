import React, {useEffect, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom'
import { auth, signInWithGoogle, logInWithEmailAndPassword} from '../firebase'
import { useAuthState} from 'react-firebase-hooks/auth'

import Loading from './Loading';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate()

    useEffect(() => {
        if (loading) {
          <Loading />
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);

  return (
    <>
         <div className='w-96 p-8 shadow-md rounded-xl bg-blue-back text-white'>
            <form action="">
                <div className="input-row mb-4">
                    <label htmlFor="email" className='text-xs block'>Email</label>
                    <input
                    type="text"
                    id="email"
                    className='border-solid
                    border-2
                    rounded
                    w-full
                    p-2'
                    placeholder='E-mail'
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-row mb-4">
                    <label htmlFor="password" className='text-xs block'>Password</label>
                    <input
                    type="password"
                    id="password"
                    className='border-solid
                    border-2
                    rounded
                    w-full
                    p-2'
                    placeholder='Password'
                    value={password}
                    onChange= {(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                className="bg-purple text-white px-8 py-2 w-full rounded mb-2"
                onClick={() => logInWithEmailAndPassword(email, password)}
                >Login</button>
                <div className="divider h-px divide-purple"></div>
                <button
                className="bg-white text-black px-8 py-2 w-full rounded mb-2"
                onClick={() => signInWithGoogle}
                >
                    
                Login with Google
                </button>
            </form>

            <Link to="/reset">Forgot Password</Link>

            <div>
            <p>Don't have an account <Link to="register">Register</Link> now</p>
            </div>

            
        </div>
    </>
   
  )
}

export default Login