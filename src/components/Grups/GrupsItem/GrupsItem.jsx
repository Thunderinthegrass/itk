import cl from "./GrupsItem.module.scss";

let grupsItem = (props) => {
  return (
    <li className={cl.grupsItem}>{props.grupsName}</li>
  )
}

export default grupsItem;