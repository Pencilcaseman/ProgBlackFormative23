import './Button.css';
const Button = ({color = "white",name = "name", onClick}) => {
return(
 <div className="button-container">
  <button className={`custom-button ${color}`} onClick={onClick}>{name}</button>
 </div>
)
}
export default Button;