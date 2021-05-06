import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


//Exemplo desenvolvido em sala de aula. Pra ver funcionar, copie e cole no  App.js

export default function AppView(){

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');   

  useEffect(()=>{
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage !== null){
        setNome(nomeStorage);
      }
    }
    getStorage();
  }, []);

  useEffect(()=>{
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome);
    }
    saveStorage();
  }, [nome]);

  function alteraNome(){
    setNome(input);
    setInput('');
  }

  const letrasNome = useMemo(() => {
    console.log('Alterou...');
    return nome.length;
  }, [nome])
  

  return(
    <View style={styles.container}>
      <TextInput
        placeholder = 'Digite seu nome'
        value={input}
        onChangeText ={(texto)=> setInput(texto)}
        style= {{backgroundColor: '#CDFC', width: 300, padding: 5,
                 }}
      />     
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>
          Alterar Nome
        </Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.contador}>{letrasNome}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 15,
    marginLeft: 30,
  },
  texto:{
    fontSize:30,
  },
  btn:{
    backgroundColor: '#2A8751',
    width: 300,
    alignItems: 'center',
    padding: 5,

  },
  btnText:{
    color: '#FFF',
  },
  contador:{
    fontSize: 16,
  },
})