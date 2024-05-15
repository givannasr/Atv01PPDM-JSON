import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/Home';
import LeiturajSON from './src/leituraJSON';
import NovoUser from './src/NovoUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Home',
              headerShown:false
            }}
          />
          <Stack.Screen
            name='LeituraJSON'
            component={LeiturajSON}
            options={{
              title:'Leitura JSON',
            }}
          />
          <Stack.Screen
            name='NovoUser'
            component={NovoUser}
            options={{
              title: 'Novo User',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  alignVH: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});