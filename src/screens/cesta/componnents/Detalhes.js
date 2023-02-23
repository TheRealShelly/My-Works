import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Dtext from '../../../componnents/Texts';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <Dtext style={estilos.nome}>{ nome }</Dtext>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Dtext style={estilos.nomeFazenda}>{ nomeFazenda }</Dtext>
        </View>
        <Dtext style={estilos.descricao}>{ descricao }</Dtext>
        <Dtext style={estilos.preco}>{ preco }</Dtext>

        <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Dtext style={estilos.textoBotao}>{ botao }</Dtext>
        </TouchableOpacity>
    </>
}
const estilos = StyleSheet.create ({
    
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  imagemFazenda: {
    width: 32,
    height: 32,
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },

  botao: {
    marginTop: 16,
    backgroundColor: '#2A9f85',
    paddingVertical: 16,
    borderRadius: 6
  },

  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold'
  }

})