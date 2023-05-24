// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegCircle,FaTimes,FaPen } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Icon = ({ic}) => {
   switch(ic){
    case "circle":
      return <FaRegCircle className="icon"  color="purple" />
      case "cross":
        return <FaTimes className='icon' color="yellow"/>
        default:
          return <FaPen className='icon'/>
   }
}

export default Icon
