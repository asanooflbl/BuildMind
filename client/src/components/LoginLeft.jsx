import React from 'react'

function LoginLeft() {
  return (
    <div className="hidden lg:flex lg:w-2/5 bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat flex-col justify-between p-12 shrink-0 select-none">
      <div className="flex flex-items-center gap-3">
       <img src="/logo.svg" alt="Logo" className="size-9.5" />
       <span className="text-4xl font-bold text-white">BuildMind AI</span>
        </div>
        <div>
            <h1 className="text-3xl font-medium text-white leading-snug mb-3 tracking-right">Build your presence on Web</h1>
            <p className="text-zinc-300 ">Create a stunning online presence with our AI-powered tools.</p>
            <p className="text-zinc-300 text-sm mt-12 ">Copyright {new Date().getFullYear()} BuildMind AI. All rights reserved.</p>
        </div>

    </div>
  )
}

export default LoginLeft