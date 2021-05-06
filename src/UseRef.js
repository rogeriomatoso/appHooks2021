import React, {useEffect, useState, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


//Exemplo desenvolvido em sala de aula. Pra ver funcionar, copie e cole no  App.js

export default function AppView(){

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');   
  const nomeInput = useRef(null);

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

  function novoNome(){
    nomeInput.current.focus();
  }

  const letrasNome = useMemo(() => {    
    return nome.length;
  }, [nome]) 
  

  return(
    <View style={styles.container}>
      <TextInput
        placeholder = 'Digite seu nome'
        value={input}
        onChangeText ={(texto)=> setInput(texto)}
        style= {{backgroundColor: '#CDFC', width: 300, padding: 5, }}
        ref={nomeInput}
      />     
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>
          Alterar Nome
        </Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.contador}> A palavra tem {letrasNome} letras</Text>
      <TouchableOpacity style={styles.btnNovoNome}  onPress={novoNome}>
        <Text>Adicionar Nome</Text>
      </TouchableOpacity>
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
    marginBottom:10,
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
    marginBottom:10,
  },
  btnNovoNome:{
    backgroundColor: '#706A91',
    alignItems: 'center',
    padding: 5,
    width:300,
  }
})