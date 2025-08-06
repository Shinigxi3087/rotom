import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { auth } from '@/lib/firebaseConfig';
import { Link, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const offset = Platform.OS === 'ios' ? 80 : 0;

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)/home');
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={offset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Time to chill smart</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your email and password to sign in
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={Colors.grey}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={Colors.grey}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            email && password ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={handleLogin}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <Link href={'/signup'} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.softGrey,
    padding: 20,
    borderRadius: 16,
    fontSize: 18,
  },
  enabled: {
    backgroundColor: Colors.dark,
  },
  disabled: {
    backgroundColor: Colors.dark,
    opacity: 0.5,
  },
});

export default Signin;
