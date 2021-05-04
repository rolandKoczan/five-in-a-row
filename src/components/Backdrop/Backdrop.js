import "./Backdrop.css";

const Backdrop = ({clicked, children}) => {
 return (
   <div className="Backdrop" onClick={clicked} >
     {children}
   </div>
 );
}

export default Backdrop;