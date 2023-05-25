import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.H1}>TOP 10 FILMES DE Ação (sangue, lutas, tiros)</Text>

        <Image source={require('./ImagemDoSite/Imagem1.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>Invasão à Casa Branca </Text>

        <Image source={require('./ImagemDoSite/Imagem2.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>O Procurado</Text>

        <Image source={require('./ImagemDoSite/Imagem3.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>Esquadrão Classe A</Text>

        <Image source={require('./ImagemDoSite/Imagem4.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>007: Cassino Royale</Text>

        <Image source={require('./ImagemDoSite/Imagem5.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>Duro de Matar 4.0</Text>

        <Image source={require('./ImagemDoSite/Imagem6.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>Os Mercenários 2</Text>

        <Image source={require('./ImagemDoSite/Imagem7.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>Carga Explosiva 2</Text>

        <Image source={require('./ImagemDoSite/Imagem8.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>Missão: Impossível 3</Text>

        <Image source={require('./ImagemDoSite/Imagem9.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>G.I. Joe: Retaliação</Text>

        <Image source={require('./ImagemDoSite/Imagem10.jpg')} style={styles.image} />
        <Text style={styles.subtitulo}>Sucker Punch: Mundo Surreal</Text>

        <Text style={styles.rodape}>© Leonardo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    justifyContent: "center",
    alignContent: "center"
  },

  image: {
    width: 300,
    height: 500,
    border: '3px solid white',
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    margin: 20
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  H1: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900'
  },

  subtitulo:{
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900',
    paddingBottom: 10,
  },

  rodape:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
    paddingTop: 10,
  },
});