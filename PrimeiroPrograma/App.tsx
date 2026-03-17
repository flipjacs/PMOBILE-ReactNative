import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      { /* 1.titulo */}
      <Text style={styles.titulo}>O Futuro Mobile</Text>
      
      {/* 2.subtitulo */}
      <Text style={styles.subtitulo}>A Tecnologia na palma da mão</Text>

      {/* 3.Corpo texto */}
      <Text style={styles.corpoTexto}>
        A programação mobile mudou o mundo.{'\n\n'}
        As faculdades utilizam para o meio de pesquisa
        e atividades acadêmicas. Enquanto o ensino médio utilizam para meio lúdico.
      </Text>

      {/* 4.Texto e decoração */}
      <Text style={styles.textoPromocional}>
        Leia a edição completa por apenas
        <Text style={styles.precoRiscado}> R$50,00</Text>
      </Text>
      <Text style={styles.citacao}>"O código é a poesia moderna"</Text>
    </View>
  ); {/* FIM DA VIEW */}
}

const styles=StyleSheet.create({
  tela:{
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
    justifyContent: 'center'
  },

  titulo:{
    fontSize: 36, // tamanho da fonte
    fontWeight: 'bold', // tipo da fonte: no caso negrito,
    color: '#1D58B1', // Cor da fonte,
    textTransform:'uppercase', // Transfomar texto em MAIUSCULO
    textAlign:'center', // Alinhar o texto no centro
    margin: 10 // margin entre objetos (margem externa: <Text>-<Text>)
  },

  subtitulo:{
    fontSize: 21,
    color:'#2D5186',
    textAlign:'center',
    marginBottom: 40, // Margem entre objetos para baixo
    letterSpacing:4,
  },

  corpoTexto:{
    fontSize: 16,
    color:'#333',
    textAlign:"justify",
    lineHeight: 28,
    marginBottom: 30
  },

  textoPromocional:{
    fontSize: 18,
    textAlign: 'center',
    color:'#000',
    marginBottom: 30
  },

  precoRiscado:{
    color:'red',
    textDecorationLine:'line-through'
  },

  citacao:{
    fontSize: 16,
    fontStyle: 'italic',
    color: '#777',
    textAlign:'right'
  }
}); // Objeto Styles terminou aqui
