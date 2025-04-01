import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SelectedRegisterFinalScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <View style={styles.backText}>
                    <Text style={styles.arrow}>←</Text>
                </View>
            </TouchableOpacity>

            <Image
                source={require('../../assets/logo-viveres.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Construindo</Text>
            <Text style={styles.subtitle}>seu perfil</Text>

            <TouchableOpacity style={styles.photoUpload}>
                <Text style={styles.uploadIcon}>⬇</Text>
            </TouchableOpacity>
            <Text style={styles.photoText}>Adicione sua foto de perfil</Text>

            <TextInput style={styles.input} placeholder="Nome de perfil" placeholderTextColor="#A9A9A9" />
            <TextInput
                style={[styles.input, styles.textarea]}
                placeholder="Crie uma bio para sua página"
                placeholderTextColor="#A9A9A9"
                multiline={true}
                numberOfLines={4}
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AccessScreen')}>
                <Text style={styles.buttonText}>Concluir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF5E6',
        paddingHorizontal: 10,
        paddingTop: 50,
    },

    backButton: {
        position: 'absolute',
        top: 50,
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

    arrow: {
        color: '#FAF5E6',
        fontSize: 24,
        fontWeight: 'bold',
    },

    logo: {
        width: 155,
        height: 155,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 15,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#651d16',
    },

    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#651d16',
        marginBottom: 20,
    },

    photoUpload: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#1c9b5f',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },

    uploadIcon: {
        fontSize: 30,
        color: '#1c9b5f',
    },

    photoText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#A9A9A9',
        marginBottom: 20,
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        marginBottom: 12,
        width: 300,
        borderWidth: 1,
        borderColor: '#ddd',
        alignSelf: 'center',
    },

    textarea: {
        height: 80, // Altura maior para o campo de texto
        textAlignVertical: 'top', // Alinha o texto no topo
    },

    button: {
        backgroundColor: '#1c9b5f',
        borderRadius: 30,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
