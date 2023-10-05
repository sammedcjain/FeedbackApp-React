import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const {feedback}=useContext(FeedbackContext)
    const average=()=>{
        let avg=0
        feedback.forEach(item => {
            avg=avg+item.rating
        });
        return (avg/feedback.length).toFixed(1)
    }
  return (
    <div className="feedback-stats">
      <h4>reviews:{feedback.length} </h4>
    
    <h4>Avg:{isNaN(average())? 0 : average()}</h4>
    </div>
  )
}

export default FeedbackStats
