import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.centerContent}>
            <Text style={styles.header}>Meet Rotom</Text>
            <Text style={styles.subheader}>Smarter food.</Text>
            <Text style={styles.subheader}>Less waste.</Text>
        </View>
      {/* Buttons */}
      <SafeAreaView style={styles.buttons}>
        <TouchableOpacity
          style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]}
          onPress={() => router.push('/signin')}
        >
          <Text style={styles.buttonTextDark}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.pillButton, { flex: 1, backgroundColor: 'white' }]}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.buttonTextLight}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background || '#111',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  icon: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    paddingHorizontal: 20,   
  },
  header: {
    fontSize: 36,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    paddingBottom: 20,
  },
  buttonTextDark: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  buttonTextLight: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Index;
