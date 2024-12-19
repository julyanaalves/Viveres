import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function DonationInfosScreen() {
    const navigation = useNavigation();
    const [selectedImageUri, setSelectedImageUri] = useState('');
    const { width } = Dimensions.get('window');

    async function handleSelectImage() {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status !== ImagePicker.PermissionStatus.GRANTED) {
                return Alert.alert(
                    'Permissão necessária',
                    'É necessário conceder permissão para acessar a sua galeria!'
                );
            }

            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });

            if (response.canceled) {
                return;
            }

            if (!response.canceled) {
                setSelectedImageUri(response.assets[0].uri);

                const imgManipuled = await ImageManipulator.manipulateAsync(
                    response.assets[0].uri,
                    [{ resize: { width: 900 } }],
                    {
                        compress: 1,
                        format: ImageManipulator.SaveFormat.JPEG,
                        base64: true,
                    }
                );

                setSelectedImageUri(imgManipuled.uri);
                foodDetected(imgManipuled.base64);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    async function foodDetected (imageBase64) {
        console.log('teste')
    }

    return (
        <View style={[styles.container, { width: width }]}>
            {/* Botão de voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            {/* Perfil */}
            <View style={styles.profileContainer}>
                <View style={styles.profileRow}>
                    <View style={styles.avatarContainer}>
                        <MaterialIcons name="person" size={30} color="#1c9b5f" />
                    </View>
                    <Text style={styles.profileName}>Doador</Text>
                </View>
                <Text style={styles.title}>DOAR</Text>
            </View>

            {/* Upload de imagem */}
            <View style={styles.uploadSection}>
                {selectedImageUri ? (
                    <Image
                        source={{ uri: selectedImageUri }}
                        style={styles.uploadedImage}
                        resizeMode="cover"
                    />
                ) : (
                    <TouchableOpacity style={styles.uploadButton} onPress={handleSelectImage}>
                        <MaterialIcons name="file-upload" size={40} color="#1c9b5f" />
                    </TouchableOpacity>
                )}
                <Text style={styles.uploadText}>Adicione uma imagem da doação</Text>
            </View>

            {/* Campos de entrada */}
            <TextInput
                style={styles.input}
                placeholder="Qual o peso da sacola?"
                placeholderTextColor="#C4C4C4"
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Descreva o conteúdo da doação"
                placeholderTextColor="#C4C4C4"
                multiline
            />

            {/* Botão de submissão */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Concluir Doação</Text>
            </TouchableOpacity>

            {/* Barra de navegação */}
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton}>
                    <MaterialIcons name="add" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MainDonorScreen')}>
                    <MaterialIcons name="home" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <MaterialIcons name="person" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF5E6',
        paddingTop: 40,
        width: '100%',
    },
    
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
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
        color: '#1c9b5f',
        marginTop: 50,
    },

    profileContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },

    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    avatarContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#1c9b5f',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 15,
        marginLeft: 200,
    },

    profileName: {
        fontSize: 20,
        marginTop: 15,
        fontWeight: 'bold',
        color: '#1c9b5f',
    },
    
    uploadSection: {
        alignItems: 'center',
        marginBottom: 20,
    },

    uploadedImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#1c9b5f',
    },

    uploadButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#1c9b5f',
        alignItems: 'center',
        justifyContent: 'center',
    },

    uploadText: {
        fontSize: 14,
        color: '#C4C4C4',
        marginTop: 10,
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
        marginHorizontal: 20,
    },

    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },

    submitButton: {
        backgroundColor: '#1c9b5f',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginHorizontal: 20,
    },

    submitButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1c9b5f',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },

    navButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
