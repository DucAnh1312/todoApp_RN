import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {scaleSizeUi} from '../assets/scaleSizeUi';
import {colors} from '../assets/colors';
import {useSelector, useDispatch} from 'react-redux';
import {getId} from '../redux/actions/actions';

const Task = ({id, completed, task, longHold, navigation}) => {
  const dispatch = useDispatch();

  const hanldeUpdate = () => {
    navigation.navigate('UpdateScreen');
    dispatch(getId(id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={hanldeUpdate}
        onLongPress={() => longHold(id)}
        style={[
          styles.item,
          {backgroundColor: completed ? colors.markDone : colors.background},
        ]}>
        <Text numberOfLines={7} style={styles.text}>
          {task}
        </Text>
      </TouchableOpacity>
      {completed ? (
        <Text style={styles.textNote}>Hoàn thành</Text>
      ) : (
        <Text style={styles.textNote}>Ghi Chú</Text>
      )}
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    width: scaleSizeUi(100, false),
    height: 'auto',
    margin: scaleSizeUi(8, false),
    // backgroundColor: 'red',
  },
  item: {
    width: scaleSizeUi(100, false),
    height: scaleSizeUi(150, true),
    // backgroundColor: done?'red' : colors.background ,

    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  text: {
    width: '80%',
    height: '80%',
    color: colors.textColor01,
  },
  textNote: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: colors.textColor01,
    marginTop: scaleSizeUi(5, true),
  },
});
