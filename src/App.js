import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import foto from './assets/foto.jpeg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card/';

const App = () => {
  function hendleRedeSocil(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://linkedin.com/in/francivaldolima');
        break;
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/francivaldolima');
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Francivaldo Lima</Text>
          <Text style={style.funcao}>Desenvolvedor Java</Text>

          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => hendleRedeSocil('github')}>
              <Icon name="github" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => hendleRedeSocil('linkedin')}>
              <Icon name="linkedin" size={30} color="#0000FF" />
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Formação Academica">
          <Text style={style.card_container_text}>SISTEMAS PARA INTERNET</Text>
          <Text style={style.card_container_text}>IFTO</Text>
          <Text style={style.card_container_text}>
            Estudo Java e Spring Framework
          </Text>
        </Card>
        <Card titulo="Experiência Profissional">
          <Text style={style.card_container_text}>JAVA</Text>
          <Text style={style.card_container_text}>JAVASCRIPT</Text>
          <Text style={style.card_container_text}>MOBILE</Text>
        </Card>
        {/* <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
            </View>
          </View>
        </View> */}
        {/* <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_container_text}>
                Experiência Profissional
              </Text>
            </View>
          </View>
        </View> */}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#D3D3D3',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 23,
  },
  foto: {
    width: 170,
    height: 170,
    borderRadius: 125,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
  },
  // card_container: {
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 20,
  // },
  // card: {
  //   width: '60%',
  //   borderRadius: 5,
  //   borderWidth: 2,
  //   borderColor: '#939393',
  //   //justifyContent: 'center',
  //   //alignItems: 'center',
  //   padding: 10,
  //   backgroundColor: '#fff',
  // },
  // card_content: {
  //   marginTop: 20,
  // },
  // card_container_text: {
  //   color: '#939393',
  //   marginBottom: 10,
  // },

  // card_container_text: {
  //   color: '#939393',
  //   marginBottom: 10,
  // },
});
export default App;
