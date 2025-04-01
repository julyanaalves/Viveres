import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeONGScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            <Image
                source={require('../../assets/logo-viveres.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Bem vindo de volta, tudo está pronto!</Text>

            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={require('../../assets/icon-perfil.webp')}
                        style={styles.avatar}
                    />
                </View>
                <Text style={styles.profileName}>ONG</Text>
            </View>

            <Text style={styles.subtitle}>Vamos juntos conectar solidariedade e sustentabilidade?</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Vamos!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF5E6',
        alignItems: 'center',
        padding: 20,
    },

    backButton: {
        position: 'absolute',
        top: 50,
        left: 0,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#1c9b5f',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },

    backText: {
        color: '#FAF5E6',
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 40,
        marginBottom: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#651d16',
        textAlign: 'center',
        marginBottom: 30,
    },

    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },

    avatarContainer: {
        width: 150,
        height: 150,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#1c9b5f',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    avatar: {
        width: 146,
        height: 146,
        resizeMode: 'contain',
        borderRadius: 50,
    },

    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1c9b5f',
    },

    subtitle: {
        fontSize: 14,
        color: '#651d16',
        textAlign: 'center',
        marginBottom: 20,
    },

    button: {
        backgroundColor: '#1c9b5f',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
