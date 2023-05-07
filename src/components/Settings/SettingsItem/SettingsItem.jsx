import cl from './SettingsItem.module.scss';

let SettingsItem = (props) => {
  console.log(props)
  return (
    <p className={cl.setting}>
      {props.setting}
    </p>
  )
}

export default SettingsItem;