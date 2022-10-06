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
         <div className='w-96 p-8 shadow-md rounded-xl bg-blue-back'>
            <form action="">
                <div className="input-row mb-4">
                    <label htmlFor="email" className='text-xs block text-white'>Email</label>
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
                    <label htmlFor="password" className='text-xs block text-white'>Password</label>
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
                <div className="divider bg-slate h-px mb-4 mt-4"></div>
                <button
                className="bg-white text-black px-8 py-2 w-full rounded mb-2"
                onClick={signInWithGoogle}
                >
                Login with Google
                </button>
            </form>

            <div className="text-right w-full mb-2">
                <Link to="/reset" className='text-blue-light self-end text-sm'>Forgot Password</Link>
            </div>

            <div>
            <p className='text-white text-sm text-center'>Don't have an account? <Link to="register" className='text-blue-light'>Register</Link> now</p>
            </div>
        </div>
    </>
  )
}

export default Login