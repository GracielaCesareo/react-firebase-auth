import React from 'react'

const Login = () => {
  return (
    <div className='w-96 p-8 shadow-md rounded-xl bg-blue-back text-white'>
        <form action="">
            <div className="input-row mb-4">
                <label htmlFor="email" className='text-xs block'>Email</label>
                <input type="text" id="email" className='border-solid border-2 rounded  w-full'/>
            </div>
            <div className="input-row mb-4">
                <label htmlFor="password" className='text-xs block'>Password</label>
                <input type="text" id="password" className='border-solid border-2 rounded  w-full'/>
            </div>
            <button>Login</button>
            <div className="divider h-px divide-slate-400"></div>
            <button>Login with Google</button>
        </form>

        <a href="">Forgot Password</a>

        <p>Don't have an account <a href="">Register</a> now</p>
    </div>
  )
}

export default Login