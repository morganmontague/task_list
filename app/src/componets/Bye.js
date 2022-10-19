function Bye (props) {
    let byebyeList = props.test.filter(
      (test) => test.status === true
    );
    let newList = byebyeList.map(test)(
      <div>
        {byebyeList.task}
      </div>
    )
    return {newList}
  }

  export default Bye