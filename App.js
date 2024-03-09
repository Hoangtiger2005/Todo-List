import React, { useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import styles from './App.components.style';
import Task from './components/Task';
import Form from './components/Form';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
      Alert.alert(
      'Thông báo!',
      'Bạn có muốn xóa công việc ?',
      [
        {
          text: 'Không',
          onPress: () => {
          }
        },
        {
          text: 'Đồng ý',
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp);
          }
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      {/*Phần trên công việc*/}
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return <Task key = {index}
            title = {item}
            number = {index + 1}
            onDeleteTask = {() => handleDeleteTask(index)}
          />;
          })}
        </ScrollView>
      </View>

      {/*Phần dưới input*/}
      <Form AddTask={handleAddTask} />
    </View>
  );
}
