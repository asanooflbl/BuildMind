import React, { useState } from 'react'
import LoginLeft from '../components/LoginLeft';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, LoaderIcon } from 'lucide-react';
  
export default function Authpage({mode}) {    
  const [error, seterror] = useState(""); 
  const [loading, setloading] = useState  (false);
  const [name, setname] = useState(""); 
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");   
  const [showpassword, setshowpassword] = useState(false);
  

   const isLogin = mode === "login";
  return (
   
    <div className= "min-h-screen bg-white flex text-zinc-900 font-sans">
      {/* Left Panel - Branding */}
        <LoginLeft/>


      {/* Right Panel - Form */} 
      <div className=' flex flex-1 items-center justify-center p-8'>
        <div className='w-full max-w-sm'>
          <div className='mb-10'>
            <h1 className='text-3xl font-medium tracking-tight text-zinc-900 mb-1.5 font-sans'>{isLogin ? "Sign In" : "Create an Account"}</h1>
            <p className='text-sm text-zinc-400'>{isLogin ? "Enter your credentials to access your account." : "Get started with our platform today by entering your details."}</p>

          </div>

        {error && <div className='mb-6 p-3 border border-red-200 bg-red-50 tex-xs-rounded text-red-700'>{error}</div>}

        <form className='space-y-6 mb-6'>
          {!isLogin && (
            <div>
              <label className='block text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-2'>Full Name</label>
              <input type="text" id="name"  value={name} onChange={(e) => setname(e.target.value)} placeholder='John Snow' className='w-full rounded-md border border-zinc-200 px-3 py-2 shadow-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 disabled:bg-zinc-50 disabled:text-zinc-500 disabled:border-zinc-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500'/>
            </div>
          )}

          <div>
              <label className='block text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-2'>Email</label>
              <input type="email" id="email"  value={email} onChange={(e) => setemail(e.target.value)} placeholder='john@snow.com' className='w-full rounded-md border border-zinc-200 px-3 py-2 shadow-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 disabled:bg-zinc-50 disabled:text-zinc-500 disabled:border-zinc-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500'/>
            </div>

            <div>
              <label className='block text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-2'>Password</label>
              <div className='relative'>
               <input type={showpassword ? "text" : "password"} id="password"  value={password} onChange={(e) => setpassword(e.target.value)} placeholder='••••••••' className='w-full rounded-md border border-zinc-200 px-3 py-2 shadow-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 disabled:bg-zinc-50 disabled:text-zinc-500 disabled:border-zinc-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500'/>
              <button type='button' onClick={()=> setshowpassword(!showpassword)} className='absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 rounded-r-md'>{showpassword ? <EyeOffIcon size={16}/> : <EyeIcon size={16}/> }</button>
              </div>
              
            </div>

            <button type='submit' disabled={loading} className='w-full rounded-md bg-linear-to-br from-red-600 mt-2 to-amber-600  px-3 py-2 text-sm font- hover:scale-102 disabled:opacity-40 text-white '>{loading && <LoaderIcon class="animate-spin h-3.5 w-3.5 mr-2"  />}
            {isLogin ? "Sign In" : "Create Account"}
            </button>

        </form>

        <p className='text-sm text-zinc-400 text-center mt-8 pt-6 border-t border-zinc-100 font-sans '>
     {isLogin ? (
      <>
        New to BuildMind AI? {""}
        <Link to="/register" className='text-zinc-900 font-medium hover:underline'>Create an account</Link>
     </>

     ):(
       <>
        already have an account? {""}
        <Link to="/login" className='text-zinc-900 font-medium hover:underline'>Sign in</Link>
     </>
     )
      }
        </p>

        </div>
      </div>
      
    </div>
  )
}
