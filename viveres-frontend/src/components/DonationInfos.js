import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { api } from '../../services/api';

export default function DonationInfosScreen() {
    const navigation = useNavigation();
    const [selectedImageUri, setSelectedImageUri] = useState('');
    const [detectedFood, setDetectedFood] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedWeight, setEstimatedWeight] = useState('');
    const { width } = Dimensions.get('window');

    const foodWeights = {
        banana: 0.12,
        apple: 0.15,
        potato: 0.3,
        carrot: 0.1,
        tomato: 0.2,
        lettuce: 0.25,
        orange: 0.2,
    };

    const foodTranslations = {
        banana: 'banana',
        apple: 'maçã',
        potato: 'batata',
        carrot: 'cenoura',
        tomato: 'tomate',
        lettuce: 'alface',
        orange: 'laranja',
    };

    async function handleSelectImage() {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status !== ImagePicker.PermissionStatus.GRANTED) {
                Alert.alert('Permissão necessária', 'É necessário conceder permissão para acessar a sua galeria!');
                return;
            }

            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });

            if (response.canceled) return;

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
            await foodDetected(imgManipuled.base64);
        } catch (error) {
            console.error('Erro ao selecionar/manipular imagem:', error);
        }
    }

    async function foodDetected(imageBase64) {
        if (!imageBase64) {
            console.error('Base64 da imagem não fornecida.');
            return;
        }

        try {
            const response = await api.post(
                '/v2/models/food-item-recognition/versions/1d5fd481e0cf4826aa72ec3ff049e044/outputs',
                {
                    user_app_id: {
                        user_id: 'joabhms',
                        app_id: 'viveres',
                    },
                    inputs: [
                        {
                            data: {
                                image: {
                                    base64: imageBase64,
                                },
                            },
                        },
                    ],
                }
            );

            const concepts = response.data.outputs[0]?.data?.concepts;

            if (!concepts || concepts.length === 0) {
                Alert.alert('Nenhum item identificado na imagem.');
                return;
            }

            const mostLikelyFood = concepts[0];
            const translatedFoodName = foodTranslations[mostLikelyFood.name.toLowerCase()] || mostLikelyFood.name;

            const foodQuality =
                mostLikelyFood.value > 0.9
                    ? 'ótima qualidade'
                    : mostLikelyFood.value > 0.7
                    ? 'boa qualidade'
                    : 'qualidade baixa';
            const estimatedQuantity = Math.floor(mostLikelyFood.value * 10);

            const averageWeightPerUnit = foodWeights[mostLikelyFood.name.toLowerCase()] || 0.2;
            const totalWeight = (estimatedQuantity * averageWeightPerUnit).toFixed(2);

            setDetectedFood(translatedFoodName);
            setEstimatedWeight(`${totalWeight} kg`);
            setDescription(
                `O alimento é ${translatedFoodName}, está em ${foodQuality} e contém aproximadamente ${estimatedQuantity} unidades.`
            );
        } catch (error) {
            console.error('Erro ao detectar alimentos:', error.response?.data || error.message || error);
        }
    }

    return (
        <View style={[styles.container, { width: width }]}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            <View style={styles.profileContainer}>
                <View style={styles.profileRow}>
                    <View style={styles.avatarContainer}>
                        <MaterialIcons name="person" size={30} color="#1c9b5f" />
                    </View>
                    <Text style={styles.profileName}>Doador</Text>
                </View>
                <Text style={styles.title}>DOAR</Text>
            </View>

            <View style={styles.uploadSection}>
                {selectedImageUri ? (
                    <Image source={{ uri: selectedImageUri }} style={styles.uploadedImage} resizeMode="cover" />
                ) : (
                    <TouchableOpacity style={styles.uploadButton} onPress={handleSelectImage}>
                        <MaterialIcons name="file-upload" size={40} color="#1c9b5f" />
                    </TouchableOpacity>
                )}
                <Text style={styles.uploadText}>Adicione uma imagem da doação</Text>
            </View>

            <View style={styles.foodDetectedContainer}>
                {detectedFood ? (
                    <Text style={styles.foodDetectedText}>
                        {detectedFood.charAt(0).toUpperCase() + detectedFood.slice(1)}
                    </Text>
                ) : (
                    <Text style={styles.foodDetectedText}>Selecione uma imagem da doação</Text>
                )}
            </View>

            <TextInput
                style={styles.input}
                placeholder="Qual o peso da sacola?"
                placeholderTextColor="#C4C4C4"
                value={estimatedWeight}
                onChangeText={(text) => setEstimatedWeight(text)}
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Descreva o conteúdo da doação"
                placeholderTextColor="#C4C4C4"
                multiline
                value={description}
                onChangeText={(text) => setDescription(text)}
            />

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Concluir Doação</Text>
            </TouchableOpacity>

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
        marginVertical: 10,
    },

    profileContainer: {
        alignItems: 'center',
    },

    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatarContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#1c9b5f',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 200,
        marginBottom: 15,
        marginRight: 10,
    },

    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1c9b5f',
    },

    uploadSection: {
        alignItems: 'center',
        marginVertical: 20,
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

    foodDetectedContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },

    foodDetectedText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
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
