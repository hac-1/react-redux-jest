import "./styling.css";

//FROM CSS
const Main = () => {
  return <h1 className="primary">STYLING</h1>;
};
export default Main;
//------------------------------------
//INLINE
export const Inline = () => {
  const heading = {
    color: "red"
  };
  return <h1 style={heading}>INLINE STYLING</h1>;
};
//------------------------------------
