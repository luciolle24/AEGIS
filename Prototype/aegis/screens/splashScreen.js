import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.aegis}>AEGIS</Text>
            <Image source={require("../assets/icon.png")} style={styles.logo} />
            <Text style={styles.text}>One SHIELD At A Time</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d232f",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 350,
        height: 350,
    },
    aegis: {
        color: "#beeaee",
        fontSize: 80,
        textShadowColor: "#5ce1e6",
        textShadowRadius: 40,
        padding: 30,
    },
    text: {
        color: "#beeaee",
        fontSize: 30,
        textShadowColor: "#5ce1e6",
        textShadowRadius: 20,
        padding: 30,
    },
});
