import cl from './Dialogs.module.scss';
import DialogItem from './Dialog/DialogItem';
import Message from './Messages/Message';
import React from 'react';



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage()
    props.updateMessageText('');
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateMessageText(text);
  }
  

  return (
    <div className={cl.dialogs__wrapper}>
      <div className={cl.dialogs}>
        {dialogsElements}
      </div>
      <div className={cl.messages}>
        {messagesElements}
        <textarea 
        ref={newMessageElement} 
        className={cl.textarea}
        onChange={onMessageChange}
        value={props.state.newMessageText}
        />
        <button onClick={addMessage} className={cl.addPost}>Отправить</button>
      </div>
    </div>
  )
}

export default Dialogs;