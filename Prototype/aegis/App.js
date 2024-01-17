import { Image, StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/splashScreen";

export default function App() {
    return (
        <View>
            {/* <SplashScreen /> */}
            <View style={styles.screen}>
                <View style={styles.spacer} />
                <Text>Rest</Text>
                <View style={styles.spacer} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1d232f",
    },

    spacer: {
        backgroundColor: "#5ce1e6",
        height: 100,
        width: "100%",
    },
    aegis: {
        color: "#beeaee",
        fontSize: 80,
        textShadowColor: "#5ce1e6",
        textShadowRadius: 40,
        padding: 30,
    },
});
