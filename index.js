import { AppRegistry, Platform } from 'react-native';
import Home from './Home';

AppRegistry.registerComponent('main', () => Home);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', { rootTag });
}


