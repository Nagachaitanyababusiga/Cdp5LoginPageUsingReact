// Write your code here
import './index.css'

const Login = props => {
  const {toggle} = props
  return (
    <button className="btnpr" onClick={toggle} type="button">
      Login
    </button>
  )
}

export default Login
