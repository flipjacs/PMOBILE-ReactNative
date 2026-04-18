import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Stars() {
  const [rating, setRating] = useState(0);
  return (
    <View style={styles.tela}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* View do Card */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://wafuu.com/cdn/shop/files/uma-musume-pretty-derby-art-works-vol-01-246211_720x.jpg?v=1732771023",
            }}
            style={styles.capa}
          ></Image>
          {/* Titulo-card */}
          <View>
            <Text style={styles.titulo}>Umamusume - Pretty Derby</Text>
            <Text style={styles.subtitulo}>ano de lançamento: 2018</Text>
          </View>
          {/* Fim do View-Titulo */}
        </View>
        {/* Fim View-Card */}

        {/* View-Sinopse */}
        <View>
          <Text style={styles.sinopse}>
            <Text style={styles.sinopseTitulo}>
              Sinopse:
              {"\n"}
            </Text>
            Uma Musume Pretty Derby é um anime que mistura esporte, idol e
            fantasia em uma premissa bem única:
            {"\n"}
            Em um mundo onde garotas especiais conhecidas como “Uma Musume”
            (garotas-cavalo) possuem velocidade, resistência e características
            herdadas de cavalos de corrida lendários, elas competem em corridas
            emocionantes enquanto também seguem carreira como idols.
            {"\n"}A história acompanha Special Week, uma jovem determinada que
            sonha em se tornar a melhor corredora do Japão. Ao ingressar na
            prestigiada academia Tracen, ela faz amizades, enfrenta rivais e
            supera desafios intensos nas pistas, sempre buscando honrar o legado
            de sua “família” e alcançar o topo.
            {"\n"}
            Entre competições cheias de adrenalina e apresentações musicais
            vibrantes, o anime combina superação, trabalho em equipe e
            crescimento pessoal, mostrando que vencer vai muito além de cruzar a
            linha de chegada.
            {"\n"}
            {"\n"}
            <Text style={styles.frase}>
              “Eu vou me tornar a melhor do Japão, custe o que custar!”
            </Text>
          </Text>
        </View>
        {/* Fim View-Sinopse */}
        <View style={styles.estrela}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <MaterialIcons
                name={i <= rating ? "star" : "star-border"}
                size={30}
                color="gold"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#2C343F",
    padding: 30,
  },

  card: {
    backgroundColor: "#556678",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    overflow: "hidden",
    elevation: 5,
  },

  capa: {
    width: 350,
    height: 500,
    borderRadius: 35,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  subtitulo: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff94",
    textTransform: "capitalize",
    paddingBottom: 10,
  },

  sinopse: {
    color: "#fff",
    textAlign: "justify",
    padding: 7,
    fontSize: 16,
    lineHeight: 24,
  },

  sinopseTitulo: {
    fontWeight: "bold",
    fontSize: 20,
  },

  frase: {
    textDecorationLine: "underline",
    color: "red",
    fontStyle: "italic",
    textAlign: "center",
  },

  estrela: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "flex-end",
  },
});
