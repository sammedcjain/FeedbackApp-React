import {FaTimes,FaEdit} from "react-icons/fa"
import Card from "./shared/Card"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({item}) {
    const {deleteFeedback,editFeedback}= useContext(FeedbackContext)
    // const [rating,setRating]=useState(7)
    // const [text,setText]=useState("This is a new feedback")
    // const handleButton=()=>{
    //     setRating( (prev)=>{ return prev+1} )
    // }
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleButton}>click</button> */}
      <button onClick={()=>deleteFeedback(item.id)} className="close"><FaTimes color="purple"/></button>
      <button onClick={()=>editFeedback(item)} className="edit"><FaEdit color="purple"/></button>
    </Card>
  )
}

export default FeedbackItem
