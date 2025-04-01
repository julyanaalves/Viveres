import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleLogin = () => {
        if (selectedOption === 'Doador') {
            navigation.navigate('AccessDonorScreen');
        } else if (selectedOption === 'Receptor') {
            navigation.navigate('AccessONGScreen');
        } else {
            Alert.alert('Seleção necessária', 'Por favor, selecione uma opção para continuar: "Doador" ou "Receptor".');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>Insira suas informações</Text>

            <View style={styles.radioContainer}>
                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setSelectedOption('Doador')}
                >
                    <View
                        style={[
                            styles.radioCircle,
                            selectedOption === 'Doador' && styles.radioCircleSelected,
                        ]}
                    />
                    <Text
                        style={[
                            styles.radioText,
                            selectedOption === 'Doador' && styles.radioTextSelected,
                        ]}
                    >
                        Doador
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setSelectedOption('Receptor')}
                >
                    <View
                        style={[
                            styles.radioCircle,
                            selectedOption === 'Receptor' && styles.radioCircleSelected,
                        ]}
                    />
                    <Text
                        style={[
                            styles.radioText,
                            selectedOption === 'Receptor' && styles.radioTextSelected,
                        ]}
                    >
                        Receptor
                    </Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Insira seu email"
                placeholderTextColor="#A9A9A9"
                keyboardType="email-address"
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, styles.passwordInput]}
                    placeholder="Insira sua senha"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁'}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Image
                source={require('../../assets/logo-viveres.png')}
                style={styles.logo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF5E6',
        paddingHorizontal: 10,
        paddingTop: 50,
        justifyContent: 'center',
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1c9b5f',
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#651d16',
        marginBottom: 20,
    },

    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },

    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1c9b5f',
        marginRight: 5,
    },

    radioCircleSelected: {
        backgroundColor: '#1c9b5f',
    },

    radioText: {
        fontSize: 16,
        color: '#1c9b5f',
    },

    radioTextSelected: {
        fontWeight: 'bold',
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

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 290,
        alignSelf: 'center',
    },

    passwordInput: {
        flex: 1,
    },

    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 12,
    },

    eyeText: {
        fontSize: 16,
        color: '#A9A9A9',
    },

    forgotPassword: {
        fontSize: 14,
        color: '#1c9b5f',
        textAlign: 'right',
        marginRight: 75,
        marginBottom: 20,
        textDecorationLine: 'underline',
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

    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20,
    },
});
