import Colors from '@/constants/Colors';
import { AuthProvider, useAuth } from '@/context/authProvider';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

   if (user) {
      router.replace('/(tabs)/home');
    } else {
      router.replace('/signin');
    }

    SplashScreen.hideAsync();
  }, [user, loading]);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.textPrimary,
        headerTitleStyle: {
          fontWeight: '600',
        },
        contentStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
      {/* No header for tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Header with back button */}
      <Stack.Screen
        name="settings"
        options={({ navigation }) => ({
          title: 'Settings',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
              <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="account"
        options={({ navigation }) => ({
          title: 'Account',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
              <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="notifications"
        options={{
          presentation: 'transparentModal', 
          animation: 'slide_from_right',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default function RootLayoutNav() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StatusBar style="light" />
          <InitialLayout />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
