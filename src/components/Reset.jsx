import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../firebase";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="reset">
      <div className='w-96 p-8 shadow-md rounded-xl bg-blue-back'>
        <label htmlFor="email" className='text-xs block text-white'>Email</label>
        <input
            id="email"
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
        <button
          className="bg-purple text-white px-8 py-2 w-full rounded mb-2 mt-4"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Send password reset email
        </button>
        <div className='text-white text-sm text-center mt-4'>
          Don't have an account? <Link to="/register" className='text-blue-light'>Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;