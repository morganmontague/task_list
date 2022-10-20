function ButtonMaker ({text},{clicky}) {
    return <button onClick={clicky} className=" btn btn-primary" id="Push">{text}</button>

}
export default ButtonMaker