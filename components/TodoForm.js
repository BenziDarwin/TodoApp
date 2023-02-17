import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function TodoForm({submitHandler}) {
    const [todo, setTodo] = useState("");

    const changeHandler = (val) => {
        setTodo(val);
    }
    return(
        <View>
            <TextInput style={styles.input} onChangeText={changeHandler} placeholder='Add todo...' value={todo}/>
            <Button onPress={() => {submitHandler(todo); setTodo("")}} title='Submit' color="coral"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingVertical:8,
        paddingHorizontal:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    }
})