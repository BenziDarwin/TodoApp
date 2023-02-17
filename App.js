import { useState } from 'react';
import { FlatList, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
//import SandBox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    {text:"Wash the car.", key:1},
    {text:"Make breakfast.", key:2},
    {text:"Do some programming.", key:3}
  ])

  const deleteHandler = (key) => {
    Keyboard.dismiss()
    setTodos(prevTodos => prevTodos.filter(item => item.key != key))
  }

  const submitHandler = (text) => {
    setTodos(prevTodos => (
      [{text:text, key:Math.random().toString()},...prevTodos]
    ))
  }

  return (
    //<SandBox/>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header/>
        <View style={styles.content}>
        <TodoForm submitHandler={submitHandler}/>
          <View style={styles.list}>
              <FlatList data={todos} renderItem={({item}) => (
                <>
                  <TodoItem item={item} deleteHandler={deleteHandler}/>
                </>
            )}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  content: {
    padding: 40,
    flex: 1
  },

  list: {
    marginTop: 20
  }
});
