import cl from './Dialogs.module.scss';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/*" + props.id;

  return (
    <div className={cl.dialog + ' ' + cl.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={cl.message}>
      <p>{props.message}</p>
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={cl.dialogs__wrapper}>
      <div className={cl.dialogs}>
        <DialogItem name="Владимир" id="1"/>
        <DialogItem name="Фёдор" id="2"/>
        <DialogItem name="Селиван" id="3"/>
        <DialogItem name="Дед Вовка" id="4"/>
      </div>
      <div className={cl.messages}>
        <Message message="Первое сообщение"/>
        <Message message="Второе сообщение"/>
        <Message message="Третье сообщение"/>
      </div>
    </div>
  )
}

export default Dialogs;