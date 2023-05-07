import cl from './Settings.module.scss';
import SettingsItem from './SettingsItem/SettingsItem';

const Settings = (props) => {
  let settingsItem = props.state.settingsItems.map(setting => <SettingsItem setting={setting.settingsItem} />)

  return (
    <div className={cl.settings}>
      {settingsItem}
    </div>
  )
}

export default Settings;