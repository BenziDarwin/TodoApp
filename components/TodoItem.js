import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function TodoItem({item, deleteHandler}) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(item.key)}>
            <Text style={styles.todo}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 8
    }
})

