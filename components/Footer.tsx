import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grupo: Alexandre A. Alexandre R e Elizeu B.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#eff2f5",
    borderTopWidth: 1,
    borderTopColor: "#d3d6db",
    paddingVertical: 14,
    alignItems: "center",
  },
  text: {
    color: "#6f7580",
    fontSize: 13,
  },
});
