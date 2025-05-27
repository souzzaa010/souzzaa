import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import DraweRoutes from './src/routes/DraweRoutes';

export default function App() {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <DraweRoutes />
      </NavigationContainer>
    </PaperProvider>

  );
}