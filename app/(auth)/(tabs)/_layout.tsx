import CustomHeader from '@/components/CustomHeader'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.dark,
      tabBarBackground: () => (
        <BlurView
            intensity={100}
            tint={'extraLight'}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.05)',
            }}
        />
      ),
      tabBarStyle: {
        backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
      }
    }}>
      <Tabs.Screen name='home' options={{
        title: 'Home', 
        tabBarIcon: ({size, color}) => (
          <Ionicons name='home' size={size} color={color}/>
        ),
        header: () => <CustomHeader />,
        headerTransparent: true,
      }}/>
      
    </Tabs>
  )
}

export default Layout

const styles = StyleSheet.create({})