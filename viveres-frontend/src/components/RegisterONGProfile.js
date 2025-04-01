import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SelectedONGProfileScreen() {
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
            <Text style={styles.sectionTitle}>Sobre a organização</Text>

            <TextInput style={styles.input} placeholder="Insira o nome da sua organização" placeholderTextColor="#A9A9A9" />
            <TextInput style={styles.input} placeholder="CNPJ" placeholderTextColor="#A9A9A9" keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="Insira o email da instituição" placeholderTextColor="#A9A9A9" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="(XX) XXXXX-XXXX" placeholderTextColor="#A9A9A9" keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Insira a sua área de atuação" placeholderTextColor="#A9A9A9" />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterFinalProfileScreen')}>
                <Text style={styles.buttonText}>Próximo</Text>
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
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20,
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
        marginBottom: 10,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1c9b5f',
        marginBottom: 20,
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        marginBottom: 12,
        width: 290,
        borderWidth: 1,
        borderColor: '#ddd',
        alignSelf: 'center',
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
