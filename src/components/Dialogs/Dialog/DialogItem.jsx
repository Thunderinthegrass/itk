import { NavLink } from "react-router-dom";
import cl from './../Dialogs.module.scss';

const DialogItem = (props) => {
  let path = "/dialogs/*" + props.id;

  return (
    <div className={cl.dialog + ' ' + cl.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;