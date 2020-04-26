import { AppRegistry } from 'react-vr'
import appData from './app.json'
import App from './src/pages/App'

AppRegistry.registerComponent(appData.appName, () => App)
