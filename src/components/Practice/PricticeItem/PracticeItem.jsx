import cl from "./PracticeItem.module.scss";

let PracticeItem = (props) => {
  return (
    <p className={cl.practice}>
      {props.practice}
    </p>
  )
}

export default PracticeItem;