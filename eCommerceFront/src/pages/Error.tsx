import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
const Error = () => {
  return (
    <Container>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" replace={true}></Link>
    </Container>
  )
}

export default Error
