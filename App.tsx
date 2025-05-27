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

  let numero = 0;
  let jogador = 0;
  

  function oponente(){
    console.log('Entrou no Oponente');
    numero = Math.floor(Math.random() * 3)
    console.log('oponente ', numero);
    setNum(numero);
    
  }

  function status(){
    console.log('Entrou no Status');
    console.log("Num ", Num);
    console.log("Imagem ", imagem);
    console.log("Numero ", numero);
    console.log("Jogador ", jogador);
    if(jogador == numero){
      setTexto('Empate!');
    }
    else if((numero == 0 && jogador == 1) || (numero == 1 && jogador == 2) || (numero == 2 && jogador == 0)){
      setTexto('Parabéns, você ganhou!');
    }
    else{
      setTexto('Que pena, você perdeu!');
    }
  }

  function jogar(){
    console.log('Entrou no Jogar');
    if(Number(escolha) == 1){
      setImagem(0);
      jogador = 0;
    }
    else if(Number(escolha) == 2){
      setImagem(1);
      jogador = 1;
    }
    else if(Number(escolha) == 3){
      setImagem(2);
      jogador = 2;
    }
    oponente();
    status();
    
  }
  
  return (
    <View style={styles.fundo}>
      <Text style={styles.titulo}>Boa Sorte!</Text>
      <Image style={styles.imagem} source={imagens1[Num]}></Image>
      <Text style={styles.textoMeio}>{texto}</Text>
      <Image style={styles.imagem} source={imagens2[imagem]}></Image>
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