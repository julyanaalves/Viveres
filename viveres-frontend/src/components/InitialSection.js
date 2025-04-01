import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Componente que representa a seção inicial (a parte verde) da tela:
export default function InitialSection({ onPress }) {
  return (
    <View style={styles.container}>
      {/* Título principal de boas vindas: */}
      <Text style={styles.title}>Bem vindo a Víveres!</Text>

      {/* Descrição da plataforma:*/}
      <Text style={styles.description}>
        Conectando solidariedade e sustentabilidade:{'\n'}
        do campo à mesa de quem mais precisa.
      </Text>

      <Text style={styles.description}>
        Somos uma plataforma que visa conectar as doações dos comerciantes com aqueles que precisam delas.
      </Text>
      
      {/* Botão para tirar o aviso - navegar de tela:: */}
      <TouchableOpacity style={styles.arrowButton} onPress={onPress}>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilização da seção:
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0, // Alinha no final da tela
    left: 0, // Alinha à esquerda
    right: 0, // Alinha à direita
    backgroundColor: '#1c9b5f', // Define a cor (verde) do fundo
    borderTopLeftRadius: 70, // Arredonda o canto superior esquerdo
    borderTopRightRadius: 70, // Arredonda o canto superior direito
    padding: 30,
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Espaçamento abaixo do título (apenas por aparência)
  },

  description: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },

  arrowButton: {
    marginTop: 20, // Adiciona espaço acima do botão da seta
  },
  
  arrow: {
    fontSize: 24,
    color: '#fff',
  },
});
