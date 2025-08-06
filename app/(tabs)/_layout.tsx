import CustomHeader from '@/components/CustomHeader';
import Colors from '@/constants/Colors';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            tint="dark"
            style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
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
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Fridge',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          header: () => <CustomHeader/>,
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size + 4} color={color} />
          ),
          header: () => <CustomHeader/>,
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
          header: () => <CustomHeader/>,
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name="expiring"
        options={{
          title: 'Expiring',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="exclamation-triangle" size={size} color={color} />
          ),
          header: () => <CustomHeader/>,
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
          header: () => <CustomHeader/>,
          headerTransparent: true,
        }}
      />
    </Tabs>
  );
};

export default Layout;
