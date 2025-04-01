import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa um sistema de navegação
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importa um navegador de pilha
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'; // Importa componentes básicos do React Native
import { useNavigation } from '@react-navigation/native'; // Importa um método para permitir a navegação
import InitialSection from './src/components/InitialSection'; // Importa o componente de seção inicial
import ProfileScreen from './src/components/SelectProfile';
import SelectedDonorProfile1Screen from './src/components/RegisterDonorProfile';
import SelectedRegisterFinalScreen from './src/components/RegisterFinalProfile';
import SelectedONGProfileScreen from './src/components/RegisterONGProfile';
import Login from './src/components/Login';
import WelcomeDonorScreen from './src/components/AccessDonor';
import WelcomeONGScreen from './src/components/AccessONG';
import DonorMainScreen from './src/components/DonorMainScreen';
import DonationInfosScreen from './src/components/DonationInfos';

const Stack = createNativeStackNavigator(); // Cria um objeto de navegação em pilha

// Declaração da tela inicial:
function HomeScreen({ navigation }) {
  return (
    // Container da HomeScreen, o seu estilo está definido em styles:
    <View style={styles.container}>
      <Image
        source={require('./assets/logo-viveres.png')} // Importa a logo do Víveres
        style={styles.logo} // Define a estilização da logo
      />

      {/* O ideal é importar os componentes para este arquivo, como está feito abaixo. Todavia, por questão de tempo, alguns ficarão para a próxima sprint: */}
      
      <InitialSection
        onPress={() => navigation.navigate('AccessScreen')} // Sobrepõe a tela com informações iniciais e, ao clicar, navega de tela
      />
    </View>
  );
}

// Declaração da tela de seleção da opção de login:
function AccessScreen() {
  const navigation = useNavigation(); // Declaração que permite a navegação de tela

  return (
    <View style={styles.container}>
      {/* Botão de voltar (tela anterior): */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Como dito anteriormente, esta parte de baixo deveria ser importada, mas ficará para a próxima sprint: */}

      <Image
        source={require('./assets/logo-viveres.png')}
        style={styles.logo}
      />

      {/* Botão de Cadastrar: */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CategoriesRegisterScreen')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Botão de Entrar: */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

// Declaração da tela de seleção do tipo de cadastro:
function CategoriesRegisterScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ProfileScreen/>
    </View>
  );
}

// Declaração da tela de cadastro de um doador (1ª etapa):
function RegisterDonorProfile1Screen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SelectedDonorProfile1Screen/>
    </View>
  );
}

// Declaração da tela de um receptor:
function RegisterONGProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SelectedONGProfileScreen/>
    </View>
  );
}

// Declaração da tela de cadastro final:
function RegisterFinalProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SelectedRegisterFinalScreen/>
    </View>
  );
}

// Declaração da tela de login:
function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

// Declaração da boas vindas ao doador:
function AccessDonorScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <WelcomeDonorScreen/>
    </View>
  );
}

// Declaração da boas vindas à ONG:
function AccessONGScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <WelcomeONGScreen/>
    </View>
  );
}

// Declaração da boas vindas à ONG:
function MainDonorScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <DonorMainScreen/>
    </View>
  );
}

// Declaração da boas vindas à ONG:
function FillDonationInfosScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <DonationInfosScreen/>
    </View>
  );
}

// Função principal - navegação entre telas:
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tela inicial - HomeScreen: */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Tela de acesso - AccessScreen: */}
        <Stack.Screen name="AccessScreen" component={AccessScreen} />

        {/* Tela de seleção de categoria de registro - CategoriesRegisterScreen: */}
        <Stack.Screen name="CategoriesRegisterScreen" component={CategoriesRegisterScreen}/>

        {/* Tela de registro de um doador (1ª etapa) - SelectedDonorProfile1Screen: */}
        <Stack.Screen name="RegisterDonorProfile1Screen" component={RegisterDonorProfile1Screen} />

        {/* Tela de registro de um receptor - SelectedDonorProfile1Screen: */}
        <Stack.Screen name="RegisterONGProfileScreen" component={RegisterONGProfileScreen} />

        {/* Tela final de registro - SelectedRegisterFinalScreen: */}
        <Stack.Screen name="RegisterFinalProfileScreen" component={RegisterFinalProfileScreen} />

        {/* Tela de login - LoginScreen: */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        {/* Tela de boas vindas ao Doador - WelcomeDonorScreen: */}
        <Stack.Screen name="AccessDonorScreen" component={AccessDonorScreen} />

        {/* Tela de boas vindas à ONG - WelcomeONGScreen: */}
        <Stack.Screen name="AccessONGScreen" component={AccessONGScreen} />

        {/* Tela de boas vindas à ONG - WelcomeONGScreen: */}
        <Stack.Screen name="MainDonorScreen" component={MainDonorScreen} />

        {/* Tela de boas vindas à ONG - WelcomeONGScreen: */}
        <Stack.Screen name="FillDonationInfosScreen" component={FillDonationInfosScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Constantes de estilização (tipo um CSS):
const styles = StyleSheet.create({
  // Container:
  container: {
    flex: 1, // Para ocupar toda a tela
    backgroundColor: '#FAF5E6', // Define cor de fundo (bege claro)
    alignItems: 'center', // Centraliza os elementos
    justifyContent: 'center', // Centraliza os elementos
    paddingHorizontal: 20, // Adiciona um espaçamento lateral (apenas por aparência)
  },

  // Estilização para a logo:
  logo: {
    width: 170, // Define largura
    height: 170, // Define altura
    resizeMode: 'contain', // Mantém a proporção da imagem
    marginBottom: 10, // Espaço abaixo da imagem (apenas por aparência)
  },

  // Estilização para os subtítulos (textos):
  subTitle: {
    fontSize: 18, // Tamanho
    fontWeight: 'bold', // Define como negrito
    color: '#651d16', // Cor do texto (marrom escuro)
    marginBottom: 30, // Espaço abaixo do texto (apenas por aparência)
  },

  // Estilização do botão de voltar (círculo):
  backButton: {
    position: 'absolute', // Posicionamento fora do "fluxo normal"
    top: 50, // Define distância do topo (apenas por aparência)
    left: 20, // Define distância da esquerda (apenas por aparência)
    width: 50, // Largura do botão circular (apenas por aparência)
    height: 50, // Altura do botão circular (apenas por aparência)
    borderRadius: 25, // Torna o botão circular
    backgroundColor: '#1c9b5f', // Cor de fundo (verde)
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Adiciona sombra (apenas por aparência)
  },

  // Estilização do texto do botão de voltar (a seta):
  backText: {
    color: '#FAF5E6', // Cor branca
    fontSize: 24, // Tamanho
    fontWeight: 'bold', // Negrito
    paddingBottom: 10, // Ajusta o posicionamento vertical
  },

  button: {
    backgroundColor: '#1c9b5f', // Cor verde
    width: '80%', // Define a largura (relativa em relação à tela)
    paddingVertical: 15, // Espaçamento interno na vertical
    borderRadius: 30, // Arredonda as bordas
    marginTop: 15, // Define um espaçamento acima do botão
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
