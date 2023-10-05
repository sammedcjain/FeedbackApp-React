import { useState,createContext } from "react";
import {v4 as uuidv4} from "uuid"

const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{
const [feedback,setFeedback]=useState(
    [
        {
            id:1,
            text:"this 1st item is from context",
            rating:10
        },
        {
            id:2,
            text:"this 2nd item is from context",
            rating:5
        },
        {
            id:3,
            text:"this 3rd item is from context",
            rating:7
        }
    ]
)

const [FeedbackEdit,setFeedbackEdit]=useState({
    item:{},
    edit:false
})

const deleteFeedback=(id)=>{
    if(window.confirm("are you sure that you want to delete?")){
        setFeedback(feedback.filter((item)=> item.id !== id))
    }
}
//set item to be updated
const editFeedback=(item)=>{
    setFeedbackEdit(
        {item,
        edit:true
    }
    )
}
const updateFeedback=(id,updatedItem)=>{
    setFeedback(feedback.map((item)=>(item.id ===id? {...item,...updatedItem}:item)))
}

const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
    setFeedback([newFeedback,...feedback])
    }  

return <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,editFeedback,FeedbackEdit,updateFeedback}}>
    {children}
</FeedbackContext.Provider>
}

export default FeedbackContext