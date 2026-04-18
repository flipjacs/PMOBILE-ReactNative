import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 1. Título */}
      <Text style={styles.titulo}>Ao Vento que Leva</Text>

      {/* 2. Subtítulo */}
      <Text style={styles.subtitulo}>Poesia Lírica / Autoria Própria</Text>

      {/* 3. Corpo do Texto */}
      <Text style={styles.corpoTexto}>
        {"Entre as belas águas do mar profundo\n"}
        {"e as estrelas acesas no céu sem fim,\n"}
        {"há um silêncio antigo dentro de mim\n"}
        {"que abraça o mistério do mundo.\n\n"}

        {"Carrego um amor que não se mede,\n"}
        {"feito de sonhos que não têm lugar,\n"}
        {"como ondas que insistem em voltar\n"}
        {"mesmo quando a dor lhes impede.\n\n"}

        {"E que os ventos levem, sem demora,\n"}
        {"as mágoas que um dia quis guardar,\n"}
        {"as ilusões que já não vivem agora…\n\n"}

        {"Que tudo o que pesa possa se soltar,\n"}
        {"e reste em mim — "}

        {/* 4. Palavra de Impacto */}
        <Text style={styles.impacto}>leve e infinita aurora</Text>{" —\n"}
        {"a coragem serena de recomeçar.\n\n"}

        {"E então, que eu deixe ir o que feriu,\n"}
        {"não mais nas sombras do que já passou,\n"}
        {"mas na luz dourada do que surgiu —\n"}
        {"onde o amor não queima… "}
        <Text style={styles.impacto}> ele iluminou.</Text>
      </Text>

      {/* 5. Autor */}
      <Text style={styles.autor}> Kirthyen Sophia</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A3C5A",
    padding: 30,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F2C572",
    letterSpacing: 3,
    marginBottom: 8,    
    textTransform: "uppercase",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 13,
    color: "#F7D6E0",
    textTransform: "capitalize",
    marginBottom: 28,
    textAlign: "center",
  },
  corpoTexto: {
    fontSize: 15,
    color: "#FFF8F2",
    lineHeight: 26,
    textAlign: "justify",
    marginBottom: 24,
  },
  impacto: {
    color: "#F2C572",
    textDecorationLine: "underline",
  },
  autor: {
    fontStyle: "italic",
    fontSize: 14,
    textAlign: "right",
    color: "#88A1D9",
  },
});