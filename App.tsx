import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, Pressable, View, ImageSourcePropType} from 'react-native';
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
  const[sorteio, setSorteio] = useState(0);
  const[jogador, setJogador] = useState(0);
  const[escolha, setEscolha] = useState(''); 
  const[texto, setTexto] = useState('');
  const[teste, setTeste] = useState('');

  function jogar(escolha: number){
    let jogador1 = 0;
    let sorteio1 = 0;
  
    if(escolha == 1){
      jogador1 = 0;
      setJogador(jogador1);
    }
    else if(escolha == 2){
      jogador1 = 1;
      setJogador(jogador1);
    }
    else if(escolha == 3){
      jogador1 = 2;
      setJogador(jogador1);
    }

    sorteio1 = Math.floor(Math.random() * 3);
    setSorteio(sorteio1);
    
    if(jogador1 == sorteio1){
      setTexto('Empate!');
      setTeste('empate');
    }
    else if((sorteio1 == 0 && jogador1 == 1) || (sorteio1 == 1 && jogador1 == 2) || (sorteio1 == 2 && jogador1 == 0)){
      setTexto('Parabéns, você ganhou!');
      setTeste('ganhou');
    }
    else{
      setTexto('Que pena, você perdeu!');
      setTeste('perdeu');
    }
    
  }
  
  return (
    <View style={styles.fundo}>
      <Text style={styles.titulo}>Boa Sorte!</Text>
      <Image style={styles.imagem} source={imagens1[sorteio]}></Image>
      <Text style={teste == 'ganhou' ? styles.ganhou : teste == 'perdeu' ? styles.perdeu : styles.empate}>{texto}</Text>
      <Image style={styles.imagem} source={imagens2[jogador]}></Image>
      <View style={styles.line}>
        <Pressable style={styles.botao} onPress={() => jogar(1)} ><Text style={styles.texto}>Pedra</Text></Pressable>
        <Pressable style={styles.botao} onPress={() => jogar(2)} ><Text style={styles.texto}>Papel</Text></Pressable>
        <Pressable style={styles.botao} onPress={() => jogar(3)} ><Text style={styles.texto}>Tesoura</Text></Pressable>
      </View>
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
  ganhou:{
    color: 'green',
    fontSize: 26,
    fontWeight: 'bold',
    margin: 10,
  },
  perdeu:{
    color: 'red',
    fontSize: 26,
    fontWeight: 'bold',
    margin: 10,
  },
  empate:{
    color: 'yellow',
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
  fundo: {
    backgroundColor: 'rgb(0, 188, 235)', 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  botao: {
    alignItems: "center",
    width: 110,
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'rgb(221, 217, 0)',
    borderWidth: 3,
    marginTop: 10,
    marginRight: 10,
  }
});