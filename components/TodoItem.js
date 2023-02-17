import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"; 


export default function TodoItem({item, deleteHandler}) {
    return (
        <TouchableOpacity style={styles.todo} onPress={() => deleteHandler(item.key)}>
            <MaterialIcons name="delete" size={20}  color="black"/>
            <Text style={styles.item} >{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 8
    },

    item: {
        paddingLeft: 10
    }
})

