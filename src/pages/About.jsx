import Card from "../components/shared/Card"
import { Link } from "react-router-dom"
function About() {
  return (
    <Card>
      <h1>About:</h1>
      <p>This is a website built using react to submit feedback ...</p> 
      <Link to="/">Click here to go back</Link>
    </Card>
  )
}

export default About
