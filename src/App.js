import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from './components/header'
import FeedbackList from './components/Feedbacklist'
import FeedbackStats from './components/feedbackStats'
import FeedbackForm from "./components/FeedbackForm"
import About from "./pages/About"
import AboutIcon from "./components/AboutIcon";
import {FeedbackContext, FeedbackProvider} from "./context/FeedbackContext"

function App() {  
  return(
    <FeedbackProvider>
    <Router>
    <Header className="header"/>
    <div className='container'>
    <Routes>
    <Route exact path="/" element={
      <>
        <FeedbackForm />
    <FeedbackStats />
      <FeedbackList />
      <AboutIcon/>
      </>
    }>
    
    </Route> 
      <Route path="/about" element={<About/>} />
       
      </Routes>
    </div>
    
    </Router>
    </FeedbackProvider>
  )
  // const title = "Comment section";
  // const comments = [
  //   { id: 1, text: "Comment 1" },
  //   { id: 2, text: "Comment 2" },
  //   { id: 3, text: "Comment 3" },
  // ];
  // const loading=false
  // const show_comment=true
  // const Comment_jsx=(<>
  // <h2>Comments({comments.length})</h2>
  // <ul>
  //   {comments.map((comment, id) => (
  //     <li key={id}>{comment.text}</li>
  //   ))}
  // </ul></>)
  // if(loading){return(<div>Loading</div>)}
  // return (
  //   <div className="First">
  //     <h1>{title}</h1>
  //     {show_comment ? Comment_jsx:null}
      
  //   </div>
  // );

}

export default App;
