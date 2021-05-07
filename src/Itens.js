import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Itens(){
    const [qtd, setQtd] = useState('');
  const [selectedQTD, setselectedQtd] = useState('');
  const nameInput = useRef(null);

  function handleClick() {
    setQtd(selectedQTD);
    AsyncStorage.setItem('qdt', selectedQTD);
    setselectedQtd('');
  }
  useEffect(() => {
    async function loadAsyncStorage() {
      setQtd(await AsyncStorage.getItem('qdt'));
    }

    function name() {
      nameInput.current.focus();
    }
    name();
    loadAsyncStorage();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.card}>
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypN9v8KhsBAdiOCOEoltCLShmoWpRh_5OL_hV768oXqFXUVs0sNfXlaQUpewQa6rjeV4&usqp=CAU',
          }}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.viewDescription}>
          <Text style={styles.title}>Iphone 5</Text>
          <Text style={styles.quantidade}>Quantidade : {qtd}</Text>
        </View>
        <View style={styles.addView}>
          <TextInput
            value={selectedQTD}
            onChangeText={setselectedQtd}
            style={styles.qtdInput}
            keyboardType="numeric"
            ref={nameInput}
          />
          <TouchableOpacity style={styles.btn} onPress={handleClick}>
            <Text style={styles.txtbtn}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 8,
    padding: '2%',
    flexDirection: 'row',
    backgroundColor: '#E6E6E6',
  },
  body: {
    marginLeft: '5%',
    justifyContent: 'space-between',
  },
  img: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantidade: {
    fontSize: 16,
  },
  qtdInput: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    width: 70,
    textAlign: 'center',
  },
  addView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    marginLeft: '10%',
    backgroundColor: '#8CD55D',
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtbtn: {
    fontSize: 40,
    color: '#000',
    paddingBottom: 8,
    
  },
});
