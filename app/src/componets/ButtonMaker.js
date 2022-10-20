function ButtonMaker ({text},{clicky}) {
    return <button onClick={clicky} className=" btn btn-primary">{text}</button>

}
export default ButtonMaker