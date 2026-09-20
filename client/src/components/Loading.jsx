import { Loader2Icon } from 'lucide-react'

function Loading() {
  return (
    <div className='flex justify-center items-center bg-white'>
       <Loader2Icon size={24} className="animate-spin text-zinc-900"/>
        </div>
  )
}

export default Loading