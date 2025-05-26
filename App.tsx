import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, Image, TouchableOpacity,View, ImageSourcePropType} from 'react-native';
import {useState} from 'react';

const imagens: ImageSourcePropType[] = [
  require('./assets/tesoura-invertida.png'),
  require('./assets/papel-invertido.png'),
  require('./assets/pedra-invertida.png'),
  require('./assets/tesoura.png'),
  require('./assets/papel.png'),
  require('./assets/pedra.png')
]

const[Esse, setEsse] = useState(0); 

export default function App() {
  const[Num, setNum] = useState(0);
  //const[Anterior, setAnterior] = useState(0);
  const[C, setC] = useState('W');
  
  function trocaEstado(){
    let sorteio = 0;
    do{
      sorteio = Math.floor(Math.random() * 3);
      console.log(sorteio, '-', Num);
    }while(sorteio === Num)
    setNum(sorteio);  
    //setAnterior(Num);

    if(sorteio < 3){
      setC('yellow');
    }
    else if(sorteio == 3 || sorteio == 4){
      setC('blue');
    }
    else{
      setC('white');
    }
  }

  function esse(n: number){
    if(n == 3){
      setEsse(n);
    }
    if(n == 4){
      setEsse(n);
    }
    else{
      setEsse(n);
    }

  }

  return (
    <View style={{backgroundColor: C, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.texto}>Sorte</Text>
      <TouchableOpacity onPress={trocaEstado}>

        <Image style={styles.imagem} source={imagens[Num]}></Image>  

      </TouchableOpacity>
      <Image source={Esse}></Image>
      <Text style={styles.texto}>Número sorteado: {Num + 1}</Text>
      <Button title="Tesoura" onPress={()=> setEsse(3)} ></Button>
      <Button title="Papel" onPress={()=> setEsse(4)} ></Button>
      <Button title="Pedra" onPress={()=> setEsse(5)} ></Button>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 49,
  },
  imagem: {
    width: 200,
    height: 200,
  },
});