import React from 'react'

export default function AwosomeFooter() {
  return (
    <div className='w-full h-17 bg-accent-foreground px-3 text-white flex justify-between items-center '>
        {/* Location */}
      <div className='text-accent font-medium'>
        Location
      </div>
      {/* copy-right */}
      <div className='text-accent font-medium'>
        CodeSnippets &copy;
         {new Date().getFullYear()}
      </div>
    </div>
  )
}
