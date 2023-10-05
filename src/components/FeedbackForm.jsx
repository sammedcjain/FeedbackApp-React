import { useState,useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/button"
import RatingSelect from "./RatingSelect" 
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    const {addFeedback,FeedbackEdit,updateFeedback}=useContext(FeedbackContext)
    const [text,setText]=useState('')
    const [btnDisabled,setbtnDisabled]=useState(true)
    const [msg,setmsg]=useState('')
    const [rating,setRating]=useState()

    useEffect(()=>{
      if(FeedbackEdit.edit===true){
        setbtnDisabled(false)
        setText(FeedbackEdit.item.text)
        setRating(FeedbackEdit.item.rating)
      }
    },[FeedbackEdit])

    const handlechange=(e)=>{
      if(text ===""){
        setbtnDisabled(true)
        setmsg(null)
      }else if(text!=="" && text.trim().length<=10){
        setbtnDisabled(true)
        setmsg("Review should be atleast 10 characters in length")
      }else{
        setbtnDisabled(false)
        setmsg(null)
      }
      setText(e.target.value)
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(text.trim().length >10){
        const newFeedback={
          text,
          rating
        }
        if(FeedbackEdit.edit===true){
          updateFeedback(FeedbackEdit.item.id,newFeedback)
        }else{
        addFeedback(newFeedback)
        }
        setText('')
      }
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
      <h2>How would you rate your service with us ?</h2>
      <RatingSelect select={(rating)=>{setRating(rating)}}/>
      <div className="input-group">
        <input onChange={handlechange} type="text" placeholder="Write your review" value={text}></input>
        <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
        </div>
        {msg ? <div className="message">{msg}</div> : null}
      </form>
    </Card>
  )
}

export default FeedbackForm
