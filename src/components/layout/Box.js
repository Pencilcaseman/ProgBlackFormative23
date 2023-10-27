// Code From https://javascript.plainenglish.io/build-a-powerful-reusable-box-component-in-react-89f4e0354fa0
import "./Box.css"

function Box({ children, ...props }) {
    return <div className="box" {...props}>{children}</div>
  }

export default Box