// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Course from './components/screens/Course';
import CourseDetail from './components/screens/CourseDetail';
import Navbar from './components/screens/Navbar';
import CourseVideo from './components/screens/CourseVideo';
import TopCourses from './components/screens/TopCourses';
import Profile from './components/screens/Profile';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Courses' component={Course} options={{ headerTitleAlign:'center' }}/>
        <Stack.Screen name='TopCourses' component={TopCourses} options={{ headerTitleAlign:'center' }}/>
        <Stack.Screen name='CourseDetails' component={CourseDetail} options={{ title: 'Course Name',headerTitleAlign:'center'}} /> 
        <Stack.Screen name='CourseVideo' component={CourseVideo} options={
          ({ route }) => ({ title: route.params.name,
            headerShown:true }) } /> 
            <Stack.Screen name='Profile' component={Profile}
             options={{headerShown:true,headerTitleAlign:'center'}}
              />
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height:'80%'
  },
});
