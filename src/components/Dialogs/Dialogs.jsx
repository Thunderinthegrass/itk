import cl from './Dialogs.module.scss';
import DialogItem from './Dialog/DialogItem';
import Message from './Messages/Messages';



const Dialogs = (props) => {
  let dialogs = [
    {id: 1, name: "Владимир Петров"},
    {id: 2, name: "Федор Пнев"},
    {id: 3, name: "Охотник Селиван"},
    {id: 4, name: "Дед Вовка"},
  ]

  let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messages = [
    {id: 1, message: "Картошка"},
    {id: 2, message: "Лук"},
    {id: 3, message: "Петрушка"},
    {id: 4, message: "Сало"},
  ]

  let messagesElements = messages.map(message => <Message message={message.message} id={message.id}/>);

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