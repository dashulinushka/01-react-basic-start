import './Button.css'

export default function Button({children, onClick}) {
  // const handleMouseEnter = () => console.log('entered');

  return (
    <button  className='button active' onClick={onClick}>  
      {children}
    </button>
  )  
} 