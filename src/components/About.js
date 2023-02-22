import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
        <h3>Made by following <Link to="https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia">youtube video</Link> course</h3>
        <br />
            <p>
                <Link to='/'>Go Back</Link>
            </p>
    </div>
  )
}

export default About