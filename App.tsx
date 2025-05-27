import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, Image, Pressable, View, ImageSourcePropType} from 'react-native';
import {useState} from 'react';

const imagens1: ImageSourcePropType[] = [
  require('./assets/pedra-invertida.png'),
  require('./assets/papel-invertido.png'),
  require('./assets/tesoura-invertida.png')
]

const imagens2: ImageSourcePropType[] = [
  require('./assets/pedra.png'),
  require('./assets/papel.png'),
  require('./assets/tesoura.png')
]

export default function App() {
  const[Num, setNum] = useState(0);
  const[escolha, setEscolha] = useState('');
  const[imagem, setImagem] = useState(0); 
  const[texto, setTexto] = useState('');
  

  function oponente(){
    setNum(Math.floor(Math.random() * 3));
    
  }

  function status(){
    if(imagem == Num){
      setTexto('Empate!');
    }
    else if((Num == 0 && imagem == 1) || (Num == 1 && imagem == 2) || (Num == 2 && imagem == 0)){
      setTexto('Parabéns, você ganhou!');
    }
    else{
      setTexto('Que pena, você perdeu!');
    }
  }

  function jogar(){
    if(Number(escolha) == 1){
      setImagem(0);
    }
    else if(Number(escolha) == 2){
      setImagem(1);
    }
    else if(Number(escolha) == 3){
      setImagem(2);
    }
    oponente();
    status();
    
  }
  console.log(texto);
  console.log(Num);
  return (
    <View style={styles.fundo}>
      <Text style={styles.titulo}>Boa Sorte!</Text>
      <Image style={styles.imagem} source={imagens1[Num]}></Image>
      <Text style={styles.textoMeio}>{texto}</Text>
      <Image style={styles.imagem} source={imagens2[Number(imagem)]}></Image>
      <Text style={styles.texto}>1-Pedra   2-Papel   3-Tesoura</Text>
      <TextInput  style={styles.input} value={escolha} 
                  onChangeText={setEscolha} keyboardType='decimal-pad'
                  placeholder='Digite o número de sua escolha:'/>
      <Pressable style={styles.botao} onPress={jogar} ><Text style={styles.texto}>Jogar</Text></Pressable>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10,
  },
  texto: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  textoMeio: {
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold',
    margin: 10,
  },
  imagem: {
    width: 200,
    height: 200,
  },
  line: {
    flexDirection: 'row'
  },
  input: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 20,
    margin: 10,
    width: 280,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'black',
  },
  fundo: {
    backgroundColor: 'rgb(0, 188, 235)', 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  botao: {
    alignItems: "center",
    width: 120,
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'rgb(221, 217, 0)',
    borderWidth: 3,
    marginTop: 10,
  }
});