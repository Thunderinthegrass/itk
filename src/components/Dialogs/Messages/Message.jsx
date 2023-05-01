import cl from "./../Dialogs.module.scss";

const Message = (props) => {
  return (
    <div className={cl.message}>
      <p>{props.message}</p>
    </div>
  )
}

export default Message;