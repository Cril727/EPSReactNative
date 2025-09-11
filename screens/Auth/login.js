import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  View,
} from "react-native";
import TextInputComponent from "../../components/inputComponent";

export default function Login({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Accede a tu cuenta</Text>

        {/* Inputs */}
        <View style={styles.form}>
          {TextInputComponent("Correo Electrónico", "ejemplo@email.com")}
          {TextInputComponent("Contraseña", "Ingrese su contraseña")}
        </View>

        <TouchableOpacity
          onPress={() => Alert.alert("Recuperar", "Función no implementada")}
        >
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        {/* Botón */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Login", "Sesión iniciada")}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          ¿No tienes cuenta?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Register")}
          >
            Regístrate
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginBottom: 18,
  },
  form: {
    width: "100%",
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    fontSize: 13,
    color: "#2563EB",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    color: "#475569",
    textAlign: "center",
  },
  link: {
    color: "#2563EB",
    fontWeight: "600",
  },
});
