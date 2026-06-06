import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type NavbarProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  onBackPress?: () => void;
};

export default function Navbar({
  title,
  actionLabel,
  onActionPress,
  onBackPress,
}: NavbarProps) {
  return (
    <View style={styles.container}>
      {onBackPress ? (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.backPlaceholder} />
      )}

      <Text style={styles.title}>{title}</Text>

      {actionLabel && onActionPress ? (
        <TouchableOpacity style={styles.button} onPress={onActionPress}>
          <Text style={styles.buttonText}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.backPlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#2f343d",
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  backPlaceholder: {
    width: 76,
  },
  backText: {
    color: "#f1f2f4",
    fontSize: 13,
    fontWeight: "700",
  },
  title: {
    color: "#f1f2f4",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  buttonText: {
    color: "#f1f2f4",
    fontSize: 13,
    fontWeight: "700",
  },
});
