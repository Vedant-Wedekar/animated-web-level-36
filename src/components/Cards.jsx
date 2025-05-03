import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-32'>

        <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className='card relative rounded-xl  w-full h-full bg-[#004d43] flex items-center justify-center'>
            <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg ' alt=''></img>
            <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#CDEA68] border-[#CDEA68]'>&copy;2024</button>
        </div>
         </div>

         <div className='cardcontainer flex  gap-10 w-1/2 h-[50vh]'>
        <div className='card  relative flex items-center justify-center  rounded-xl w-full h-full bg-[#222d2d]'> 
            <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg ' alt=''></img>
        <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#CDEA68] border-[#CDEA68]'>&copy;2024</button></div>

        <div className='card  relative flex items-center justify-center  rounded-xl w-full h-full bg-[#222d2d]'>
        <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt=''></img>
        <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#CDEA68] border-[#CDEA68]'>&copy;2024</button>
        </div>

         </div>
      


    </div>
  )
}

export default Cards
