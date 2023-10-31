import './button.css'



function Button({type, children}) {
  //console.log(props.hm);
  return (
    <>
    <button type = {type} className="button">{children}</button>
    </>
  );
}

export default Button
