
import './App.css'

// eslint-disable-next-line no-unused-vars
import Icon from "./components/icon"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


 let tikArray=new Array(9).fill("");
console.log(tikArray)

function App() {
  let [isCross,setCross]=useState(true)
  let [winMessage,setwinMessage]=useState("")


  //play again
  const playAgain=()=>{
    tikArray.fill("")
    setCross(true)
    setwinMessage("")
  }

  //Find Winner
   // eslint-disable-next-line no-unused-vars
   const findWinner=()=>{
    //row1
    if(tikArray[0]==tikArray[1] && tikArray[0]==tikArray[2] && tikArray[0]!=""){
      setwinMessage(tikArray[0]+" won the game")
    }

    //row2
    else if(tikArray[3]==tikArray[4] && tikArray[3]==tikArray[5] && tikArray[3]!=""){
      setwinMessage(tikArray[3]+" won the game")
    }

    //row3
    else if(tikArray[6]==tikArray[7] && tikArray[6]==tikArray[8] && tikArray[6]!=""){
      setwinMessage(tikArray[6]+" won the game")
    }

    //column1
    else if(tikArray[0]==tikArray[3] && tikArray[0]==tikArray[6] && tikArray[0]!=""){
      setwinMessage(tikArray[0]+" won the game")
    }

    //column2
    else if(tikArray[1]==tikArray[4] && tikArray[1]==tikArray[7] && tikArray[1]!=""){
      setwinMessage(tikArray[1]+" won the game")
    }

    //column3
    else if(tikArray[2]==tikArray[5] && tikArray[2]==tikArray[8] && tikArray[2]!=""){
      setwinMessage(tikArray[2]+" won the game")
    }

    //diagonal1
    else if(tikArray[0]==tikArray[4] && tikArray[0]==tikArray[8] && tikArray[0]!=""){
      setwinMessage(tikArray[0]+" won the game")
    }
     //diagonal2
     else if(tikArray[2]==tikArray[4] && tikArray[2]==tikArray[6] && tikArray[2]!=""){
      setwinMessage(tikArray[2]+" won the game")
    }
     else if(tikArray.indexOf("")==-1){
       setwinMessage("It's a tie")
     }
   }

  //Change Item
  const changeItem=(index)=>{
    if(winMessage){
      return toast("Game has Already Over!")
    }
     if(tikArray[index]!=""){
        return toast("Open your eyes dude where are you tapping")
     }
     else if(tikArray[index]==""){
          tikArray[index]=isCross?"cross":"circle"
          setCross(!isCross)
          findWinner()
     }
  }
   
  return (
    <div>
      <ToastContainer position="bottom-center"/>
      {
        winMessage!=""?
          <div>
        <h1>{winMessage.toUpperCase()}</h1>
        <button onClick={playAgain}>Play Again</button>
         </div>
        :
        (<h1> Chance of {isCross?"X":"O"}</h1>)
      }

      <div className='grid'>
        {
          tikArray.map((value,index)=>(
            <div key={index} className='box' onClick={()=>changeItem(index)}>
              <Icon ic={value}/>
            </div>
          ))
           
        }
          
        
       

      </div>
      
    </div>
  )
}

export default App
