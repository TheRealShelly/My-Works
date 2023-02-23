import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function Dtext({ children, style }) {
    let estilo2 = estilo.regular;

    if (style?.fontWeight === 'bold') {
        estilo2 = estilo.bold
    }

    return <Text style={[style, estilo]}>{ children }</Text>
};

const estilo = StyleSheet.create({
    regular: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    bold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
}); 