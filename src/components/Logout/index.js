// Write your code here
import './index.css'

const Logout = props => {
  const {toggle} = props
  return (
    <button className="btnpr" onClick={toggle} type="button">
      Logout
    </button>
  )
}

export default Logout
