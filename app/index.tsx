import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
    const router = useRouter();
    const buttonScale = React.useRef(new Animated.Value(1)).current;

    const animatePress = (toValue: number) => {
        Animated.spring(buttonScale, {
            toValue,
            useNativeDriver: true,
            speed: 20,
        }).start();
    };

    return (
        <View style={styles.container}>
            {/* App Icon with Soft Shadow */}
            <View style={styles.logoContainer}>
                <Image 
                    source={require('@/assets/images/icon.png')} 
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Smarter food</Text>
                <Text style={styles.subtitle}>Less waste</Text>
            </View>

            {/* Animated Buttons */}
            <SafeAreaView style={styles.buttonContainer}>
                <TouchableOpacity
                    onPressIn={() => animatePress(0.96)}
                    onPressOut={() => animatePress(1)}
                    onPress={() => router.push('/signIn')}
                    activeOpacity={0.9}
                >
                    <Animated.View style={[styles.button, styles.primaryButton, { transform: [{ scale: buttonScale }] }]}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </Animated.View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPressIn={() => animatePress(0.96)}
                    onPressOut={() => animatePress(1)}
                    onPress={() => router.push('/signUp')}
                    activeOpacity={0.9}
                >
                    <Animated.View style={[styles.button, styles.secondaryButton, { transform: [{ scale: buttonScale }] }]}>
                        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Sign Up</Text>
                    </Animated.View>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA', // Very light gray
        padding: 24,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 24,
    },
    title: {
        fontSize: 32,
        color: '#2D3748', // Dark blue-gray
        marginBottom: 8,
        fontFamily: 'PokemonStyle', // Your custom Pokémon-like font
        letterSpacing: 2,
        textShadowColor: 'rgba(0,0,0,0.05)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    subtitle: {
        fontSize: 16,
        color: '#718096', // Medium gray
        fontFamily: 'SpaceMono',
    },
    buttonContainer: {
        marginBottom: 40,
        gap: 16,
    },
    button: {
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButton: {
        backgroundColor: Colors.dark, // Friendly blue
    },
    secondaryButton: {
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'PokemonStyle',
        letterSpacing: 1,
    },
    secondaryButtonText: {
        color: '#4A5568',
    },
});

export default HomeScreen;