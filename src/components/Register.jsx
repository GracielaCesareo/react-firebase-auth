import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, loading, error] = useAuthState(auth);
    const history = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/dashboard");
    }, [user, loading]);


  return (
    <div className="register">
      <div className="w-96 p-8 shadow-md rounded-xl bg-blue-back text-white">
        <div className="input-row mb-4">
            <input
            type="text"
            className='border-solid
                    border-2
                    rounded
                    w-full
                    p-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            />
        </div>
        <div className="input-row mb-4">
            <input
            type="text"
            className='border-solid
                    border-2
                    rounded
                    w-full
                    p-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
            />
        </div>
        <div className="input-row mb-4">
            <input
            type="password"
            className='border-solid
                    border-2
                    rounded
                    w-full
                    p-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
        </div>
        <button className="bg-purple text-white px-8 py-2 w-full rounded mb-2" onClick={register}>
          Register
        </button>
        <button
          className="bg-white text-black px-8 py-2 w-full rounded mb-2"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  )
}

export default Register