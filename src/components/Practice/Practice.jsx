import cl from "./Practice.module.scss";
import PracticeItem from "./PricticeItem/PracticeItem";

let Practice = (props) => {
  let practiceItem = props.state.practiceItems.map(practice => <PracticeItem practice={practice.practiceName} />)
  return (
    <div className={cl.practice}>
      {practiceItem}
    </div>
  )
}

export default Practice;