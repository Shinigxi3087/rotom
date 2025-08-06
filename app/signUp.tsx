import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { auth } from '@/lib/firebaseConfig';
import { Link, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const offset = Platform.OS === 'ios' ? 80 : 0;

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)/home');
    } catch (error: any) {
      Alert.alert('Signup Failed', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={offset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's Get Started</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your email and password to create an account
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

        <Link href={'/signin'} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            email && password ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={handleSignup}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
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

export default Signup;
