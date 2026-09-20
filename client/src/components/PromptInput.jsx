import React, { useEffect, useRef, useState } from 'react'
import { ArrowRightIcon,  CloudUploadIcon, Loader2Icon, Mic2Icon } from 'lucide-react'
function PromptInput({ onSubmit, loading = false, placeholder = "Describe the website you want to build ", large = false, autoFocus = false, variant = "default" }) {
    const [value, setValue] = useState("");
    const textareaRef = useRef(null);


    useEffect(() => {
     if(autoFocus && textareaRef.current){
      textareaRef.current.focus();
     }
    }, [autoFocus])
    


    const handlesubmit = (e) => {
        if (e) e.preventDefault()
        const trimmed = value.trim();
        if (!trimmed || loading) return;
        onSubmit(trimmed);
        setValue("");
    }
    const handleKeydown = (e) => {
        if (e.key == "Enter" && !e.shiftKey) {
            e.preventDefault();
            handlesubmit();
        }
    }

    if (variant === 'glass')
        return (
            <form onSubmit={handlesubmit} className='max-w-2xl w-full bg-white/20 backdrop-blur-xl rounded-xl ring-1 ring-white/25 focus-within:ring-2 focus-within:ring-white/30 overflow-hidden mt-6 transition'>
                <textarea placeholder={placeholder} disabled={loading} value={value} ref={textareaRef} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeydown} rows={3} className='w-full p-4 pb-2 resize-none placeholder:text-white/60 outline-none bg-transparent text-white  text-base' name="" id=""></textarea>

                <div className='flex items-center justify-between pb-3 px-3 gap-3'>
                    <label htmlFor="file" className='border border-white/20 text-white/80 hover :text-white hover:border-white/40  rounded-md h-8 w-8 flex items-center justify-center cursor-pointer transition-all duration-300 '>
                        <input type="file" name="" id="file" hidden />
                        <CloudUploadIcon size={18} />
                    </label>

                    <div className='flex item-center justify-end gap-2'>
                        <button type='button' className='flex items-center justify-center p-1 text-white/60 hover:text-white hover:border-white/40 cursor-pointer rounded-md'>
                            <Mic2Icon size={22} />
                        </button>

                        <button type='submit' disabled={!value.trim() || loading} className='flex items-center justify-center p-1.5   hover:text-white hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer rounded-full'>
                            {loading ? <Loader2Icon size={18} className='animate-spin' /> : <ArrowRightIcon size={18} />}
                        </button>


                    </div>

                </div>
            </form>

        )


return (
    <div className={`bg-white border border-zinc-200 rounded-xl flex items-end gap-2 focus-within:ring-1 focus-within:ring-zinc-300 transition ${large ? "p-4" : "p-3"} `}>
        <textarea placeholder={placeholder} disabled={loading} value={value} ref={textareaRef} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeydown} rows={large ? 5 : 1} className={`flex-1 bg-transparent border-none outline-none resize-none text-zinc-900 
            placeholder:text-zinc-400 ${large ? "text-base" : "text-sm"}`} name="" id=""></textarea>
            <button onClick={()=>handlesubmit()} disabled= {!value.trim() || loading} className='inline-flex items-center justify-center cursor-pointer p-2 rounded-full disabled:opacity-40 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200 shrink-0 '
                style={{
                    width :large ? 38 : 26,
                    height : large ? 38 : 26,
                }}>  
                {loading ? <Loader2Icon className='animate-spin' size={large? 20 :15}/> : <ArrowRightIcon size={large? 20 :15}/>}
            </button>
    </div>

)
}
export default PromptInput