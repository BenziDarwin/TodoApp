import { Button, StyleSheet, Text, View } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
            <Text style={styles.boxFive}>Five</Text>
            <Text style={styles.boxSix}>Six</Text>
        </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: "#ddd"
    },

    boxOne:{
        flex: 1,
        padding: 10,
        backgroundColor: "orange"
    },

    boxTwo: {
        flex: 1,
        padding: 10,
        backgroundColor: "coral"
    },

    boxThree: {
        flex: 1,
        padding: 10,
        backgroundColor: "skyblue"
    },

    boxFour: {
        flex: 2,
        padding: 10,
        backgroundColor: "violet"
    },

    boxFive: {
        flex: 1,
        padding: 10,
        backgroundColor: "yellow"
    },
    
    boxSix: {
        flex: 1,
        padding: 10,
        backgroundColor: "pink"
    }
})