  
  import {store} from '../utils/store';
  import { setSettings } from '../slices/settings';
  
  const handleSettingsChange = (key, value) => {
    store.dispatch(setSettings({ [key]: value }));
  };

  export {handleSettingsChange};