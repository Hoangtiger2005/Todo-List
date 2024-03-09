import { View, Text, TextInput, TouchableOpacity, Keyboard ,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import styles from '../Form/style'
import { useState } from 'react'

const Form = (props) => {
    const [task, setTask] = useState('')
    const handleTask = () => {
        if(task.length === 0){
            alert ('Vui long nhap cong viec!')
            return false;
        }
        props.AddTask(task);
        setTask('');
        Keyboard.dismiss();
    }
    return (
        <View style = {styles.addTask}>
            <TextInput 
                value={task}
                onChangeText={(text) => setTask(text)}
                placeholder =  "your task" 
                style = {styles.input}
            />

            <TouchableOpacity
                    onPress={handleTask}
            >
                <View style = {styles.iconWrapper}>
                    <Text style = {styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Form;