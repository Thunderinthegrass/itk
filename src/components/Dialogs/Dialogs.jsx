import cl from './Dialogs.module.scss';
import DialogItem from './Dialog/DialogItem';
import Message from './Messages/Message';



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);

  

  return (
    <div className={cl.dialogs__wrapper}>
      <div className={cl.dialogs}>
        {dialogsElements}
      </div>
      <div className={cl.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;