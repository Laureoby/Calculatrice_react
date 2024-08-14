import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import useFitText from 'use-fit-text';

function Screen() {
  const {calc} = useContext(CalcContext)
  const {fontSize, ref} = useFitText({maxFontSize: 250})

  return (
    <div ref={ref} style={{fontSize}} 
    className='screen bg-gray-100 p-4 rounded text-right text-3xl md:text-4xl lg:text-5xl'>
    {calc.num ? calc.num : calc.res}</div>
  )
}

export default Screen