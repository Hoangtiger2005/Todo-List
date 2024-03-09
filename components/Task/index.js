import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Task = (props) => {
  const {number} = props;
  const numberText = number < 10 ? `0${number}` : number;
  const numberBg = number %2 === 0 ? styles.odd : styles.even;
  return (
    <TouchableOpacity
      onPress={props.onDeleteTask}
    >
        <View style = {styles.item}>
            <View style = {[styles.square, numberBg]}>
                <Text style = {styles.number}>{numberText}</Text>
            </View>
            <Text style = {styles.content}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Task;