import "./ButtonCal.css";

const Butt =({Cal , color ,OnClick})=>{
    return <div 
    onClick={() => OnClick(Cal)}
    className="button-container"
   style={{ backgroundColor: color }}> {Cal} </div>
}
export default Butt