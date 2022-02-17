import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import WeekView from './components/WeekView';
import TopView from './components/TopView';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"  hidden={true}/>
      <TopView/>
      <WeekView/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
