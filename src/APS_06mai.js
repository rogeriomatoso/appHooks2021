import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Itens from './src/Itens';
export default function App() {

  const finalizaPedido = useRef(null);
  
  function conclui(){
    finalizaPedido.current.focus();
  }

  return (
    <View style={styles.container}>
      <Itens />
      <View style={styles.body}>
        <TouchableOpacity style={styles.btnFinalizar} onPress={conclui}>
          <Text style={styles.txtBtnFinalizar}>FINALIZAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFinalizarPedido} ref={finalizaPedido}>
          <Image
            style={styles.image}
            source={{
              uri:
               'https://images-ext-2.discordapp.net/external/j8Cem0xGa1v9j5BG5YjYBsd_uk6GsKrmmh6EMXPFGq4/%3Fcaw%3D800/https/stat.ameba.jp/user_images/20181004/23/plusmarket-kanda/e9/8d/p/o0656058914278182582.png?width=522&height=469',
            }}
          />
          <Text style={styles.txtBtnRealizar}>Realizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '10%',
    marginTop: '10%',
  },
  btnFinalizar: {
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    borderRadius: 8,
    padding: 10,
    marginVertical: '5%',
    borderWidth: 2,
    borderColor: '#000',
  },
  txtBtnFinalizar: {
    fontSize: 18,    
  },
  txtBtnRealizar: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  btnFinalizarPedido: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8CD55D',
    borderRadius: 8,
    padding: 15,
    marginVertical: '5%',
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'space-around',
  },
  image: {
    height: 50,
    width: 50,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
});