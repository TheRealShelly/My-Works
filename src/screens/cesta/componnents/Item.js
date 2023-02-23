import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Dtext from '../../../componnents/Texts';

export default function Item({ item: { nome, imagem}}) {

    return <View style={estilos.item}>
        <Image source={ imagem } style={estilos.imagem}/>
        <Dtext style={estilos.nome}>{ nome }</Dtext>
    </View>

}

const estilos = StyleSheet.create({
    

    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
        
    },

    imagem: {
        width: 46,
        height: 46,
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }

}) 