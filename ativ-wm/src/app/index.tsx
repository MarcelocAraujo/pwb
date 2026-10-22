import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const TAGS = ["Python", "Java", "C", "SQL", "React Native", "Git"];

export default function Index() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.fotoWrapper}>
        <Image
          source={require("../../assets/images/perfil.jpg")}
          style={styles.foto}
        />
      </View>

      <Text style={styles.nome}>Marcelo Caldas</Text>

      <View style={styles.divisor} />

      <Text style={styles.subtitulo}>Ciência da Computação · UNICAP</Text>
      <Text style={styles.local}>Recife, Pernambuco</Text>

      <View style={styles.tags}>
        {TAGS.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagTexto}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>SOBRE MIM</Text>
        <Text style={styles.bio}>
          Sou estudante de Ciência da Computação na UNICAP, atualmente no 5º período.
          Tenho interesse em desenvolvimento de software, inteligência artificial e
          análise de dados. No dia a dia trabalho com Python, C, Java e SQL, além de
          tecnologias web e versionamento com Git e GitHub. Gosto de transformar ideias
          em projetos que funcionam de verdade e busco uma oportunidade de estágio para
          aprender na prática e contribuir com um time de desenvolvimento.
        </Text>
      </View>

      <Text style={styles.rodape}>React Native · Expo</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#0B1120",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 48,
  },
  fotoWrapper: {
    padding: 5,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#38BDF8",
    marginBottom: 24,
  },
  foto: {
    width: 280,
    height: 280,
    borderRadius: 140,
  },
  nome: {
    fontSize: 38,
    fontWeight: "800",
    color: "#F8FAFC",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  divisor: {
    width: 64,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#38BDF8",
    marginVertical: 14,
  },
  subtitulo: {
    fontSize: 16,
    color: "#7DD3FC",
    fontWeight: "600",
  },
  local: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
    maxWidth: 480,
  },
  tag: {
    backgroundColor: "#13203A",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  tagTexto: {
    color: "#93C5FD",
    fontSize: 13,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#111C32",
    borderWidth: 1,
    borderColor: "#1E293B",
    borderRadius: 20,
    padding: 24,
    marginTop: 32,
    width: "100%",
    maxWidth: 560,
  },
  cardTitulo: {
    fontSize: 12,
    fontWeight: "700",
    color: "#38BDF8",
    letterSpacing: 2,
    marginBottom: 14,
  },
  bio: {
    fontSize: 16,
    lineHeight: 26,
    color: "#CBD5E1",
  },
  rodape: {
    marginTop: 36,
    fontSize: 12,
    color: "#475569",
    letterSpacing: 1,
  },
});