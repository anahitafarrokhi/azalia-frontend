import React from 'react'
type FacebookProps ={
    color:any
}
export const Facebook :React.FC<FacebookProps> = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" id="facebook">
  <path fill-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clip-rule="evenodd"></path>
</svg>

  )
}
