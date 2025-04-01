import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DonorMainScreen() {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window'); // Obtendo a largura da tela

    return (
        <View style={[styles.container,{ width: width}]}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <MaterialIcons name="person" size={40} color="#1c9b5f" />
                </View>
                <Text style={styles.profileName}>Doador</Text>

                <TouchableOpacity style={styles.newDonationButton} onPress={() => navigation.navigate('FillDonationInfosScreen')}>
                    <Text style={styles.newDonationButtonText}>Fazer nova doação</Text>
                </TouchableOpacity>
            </View>

            {/* Container grande ajustado */}
            <View style={styles.containerDonation}>
                <View style={[styles.donationsContainer, { width: width * 0.9 }]}>
                    <Text style={styles.sectionTitle}>Doações</Text>
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusBadgeText}>Ativas</Text>
                    </View>
                </View>

                <View style={[styles.donationCard, { width: width * 0.9 }]}>
                    <MaterialIcons name="inventory" size={50} color="#fff" />
                    <Text style={styles.donationText}>doação xyz</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <MaterialIcons name="edit" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.cancelButton, { width: width * 0.9 }]}>
                    <Text style={styles.cancelButtonText}>Cancelar Doação</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('FillDonationInfosScreen')}>
                    <MaterialIcons name="add" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <MaterialIcons name="home" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <MaterialIcons name="menu" size={30} color="#fff" />
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

    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },

    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#1c9b5f',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 10,
    },

    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1c9b5f',
        marginBottom: 10,
    },

    newDonationButton: {
        backgroundColor: '#1c9b5f',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },

    newDonationButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },

    containerDonation: {
        alignItems: 'center', // Mantém o container alinhado ao centro
        marginBottom: 20,
    },

    donationsContainer: {
        marginBottom: 20,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1c9b5f',
        marginBottom: 10,
    },

    statusBadge: {
        backgroundColor: '#DFF6DD',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        alignSelf: 'flex-start',
        marginVertical: 10,
    },

    statusBadgeText: {
        color: '#1c9b5f',
        fontSize: 12,
    },

    donationCard: {
        backgroundColor: '#1c9b5f',
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    donationText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    editButton: {
        padding: 5,
    },

    cancelButton: {
        backgroundColor: '#651d16',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
    },

    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
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
