import React from "react"
import { StyleSheet, Text, View, ScrollView, Image, Animated } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      {/* View Card */}
      <View style={styles.card}>
        <Image 
          source={{uri:"https://akamai.sscdn.co/uploadfile/letras/fotos/3/5/a/d/35addcc85bf1bc37777a263592405182.jpg"}}
          style={styles.capa}>
        </Image>

          {/* titulo-card */}
        <View style={styles.cardTitulo}>
          <Text style={styles.titulo}>
            八方来财
          </Text >

          {/* subtitulo-card */}
          <Text style={styles.subtitulo}>
            Stacks from All Sides • Chinese Rap
          </Text>
        </View>
      </View> 
      {/* Fim do View Card */}

      {/* corpo texto */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.texto}>
          財从八方来 財 {"\n"}
          我們這裡的憋佬仔脖上喜歡掛玉牌 {"\n"}
          香爐供台上擺長大才開白黃牌 {"\n"}
          虔誠拜三拜錢包裡面多幾百 {"\n"}
          易的是六合彩難的是等河牌 {"\n\n"}

          來財 來 {"\n"}
          來財 來 {"\n"}
          來財 來 {"\n"}
          來財 來 {"\n\n"}

          宗旨利滾利對應好運八方來 {"\n"}
          散了才能聚你不出手 說聊齋 {"\n"}
          這一把直接合因為我花錢交朋友 {"\n"}
          藝高人膽大攬佬小盲三條九 {"\n\n"}

          <Text style={styles.refrao}>
            {/* REFRÃO */}
            回饋社會先摸到那頂皇冠後 {"\n"}
            找你做事人太多 事情兩袖清風做 {"\n"}
            一陰一陽之謂道紫氣東來 {"\n"}
            明碼標價的那些物非黑即白 {"\n\n"}

            若上頒獎台切莫張燈結彩 {"\n"}
            八仙桌的收尾少不了空心菜 {"\n"}
            上北下南左西右東東南東北西北西南 {"\n"}
            步步高升八方來財四海為家興旺 {"\n\n"}

            百事可樂千事吉祥萬事如意順風順水 {"\n"}
            天道酬鵬程萬裡 你不給點表示嗎 {"\n"}
            我們這裡的憋佬仔脖上喜歡掛玉牌 {"\n"}
            香爐供台上擺長大才開白黃牌 {"\n\n"}
          </Text>

          虔誠拜三拜錢包裡面多幾百 {"\n"}
          易的是六合彩 難的是等河牌 {"\n"}
          來財 來 {"\n"}
          來財 來 {"\n"}
          來財 來 {"\n"}
          來財 來 {"\n"}
          宗旨利滾利對應好運八方來 {"\n"}
          散了才能聚你不出手 說聊齋 {"\n\n"}

          <Text style={styles.autor}>
            Skai Isyourgod
          </Text>
        </Text>
      </ScrollView> {/* Fim do corpo texto */}
    </View> // Fim da View Principal
  );
}

const styles=StyleSheet.create({
  tela:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },

  card: {
    backgroundColor: "#b30000",
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  capa:{
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12
  },

  cardTitulo:{
    flex: 1
  },

  titulo:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#d4af27',
    marginBottom: 4,
    textAlign: 'justify',
    letterSpacing:2,
    textTransform: 'uppercase'
  },

  subtitulo:{
    fontSize: 20,
    color: '#b0a82f',
    textTransform: 'capitalize',
    textAlign: 'left',
    marginBottom: 0
  },

  texto:{
    fontSize:18,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 28,
    letterSpacing: 1
  },

  refrao:{
    //textDecorationLine: 'underline',
    color: '#ff4d4d',
    fontWeight:'bold'
  },

  autor:{
    fontStyle: 'italic',
    textAlign: 'right',
    color: '#888'
  }
})