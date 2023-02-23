import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Dtext from '../../componnents/Texts';

import Topo from './componnents/Topo';
import Detalhes from './componnents/Detalhes';
import Item from './componnents/Item';



export default function Cesta({ topo, detalhes, itens }) {
  return <>

    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo}/>
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Dtext style={estilos.titulo}>{ itens.titulo }</Dtext>
          </View>
        </>
      }}
    />

    

    
  </>
}

const estilos = StyleSheet.create({

  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  

});