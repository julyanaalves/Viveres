import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/logo-viveres.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Construindo</Text>
      <Text style={styles.subTitle}>seu perfil</Text>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('RegisterDonorProfile1Screen')}>
        <Text style={styles.optionTitle}>Doador</Text>
        <Text style={styles.optionDescription}>
          Comerciante disposto a fazer doações.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('RegisterONGProfileScreen')}>
        <Text style={styles.optionTitle}>Receptor</Text>
        <Text style={styles.optionDescription}>
          Organização e/ou grupos social que recebe as doações.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5E6',
    paddingHorizontal: 19,
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
    fontSize: 24,
    color: '#FAF5E6',
    fontWeight: 'bold',
  },

  logo: {
    width: 170,
    height: 170,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#651d16',
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#651d16',
    textAlign: 'center',
    marginBottom: 30,
  },

  optionButton: {
    backgroundColor: '#1c9b5f',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  optionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  optionDescription: {
    color: '#fff',
    fontSize: 14,
  },
});
