import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {scaleSizeUi} from '../assets/scaleSizeUi';
import {colors} from '../assets/colors';

const AddButton = ({navigation, router}) => {
  return (
    <TouchableOpacity
      style={styles.icon}
      onPress={() => navigation.navigate('InputScreen')}>
      <Icon
        name="edit"
        size={scaleSizeUi(20, true)}
        color={colors.buttonColor}
      />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: scaleSizeUi(30, true),
    marginRight: scaleSizeUi(15, false),
  },
});
