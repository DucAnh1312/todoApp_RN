import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {scaleSizeUi} from '../assets/scaleSizeUi';
import {colors} from '../assets/colors';

const InputNagbar = ({navigation, addNote, hide}) => {
  const hanldeSubmit = () => {
    addNote();
  };

  return (
    <>
      <View style={styles.listIcon}>
        <View style={styles.leftIcon}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.pop()}>
            <Icon
              name="arrow-back"
              size={scaleSizeUi(25, true)}
              color={colors.iconColor02}
            />
          </TouchableOpacity>
          <Text style={styles.textNar}>Tiêu Đề</Text>
        </View>
        {hide && (
          <View style={styles.rightIcon}>
            <TouchableOpacity style={styles.icon} onPress={hanldeSubmit}>
              <Icon
                name="checkmark"
                size={scaleSizeUi(25, true)}
                color={colors.iconColor02}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default InputNagbar;

const styles = StyleSheet.create({
  listIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: scaleSizeUi(65, true),
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  icon: {
    width: scaleSizeUi(40, false),
    height: scaleSizeUi(40, true),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleSizeUi(5, false),
    marginLeft: scaleSizeUi(5, false),
    flexDirection: 'row',
    borderRadius: 50,
    // backgroundColor: 'blue',
  },
  rightIcon: {
    flexDirection: 'row',
    // marginRight: scaleSizeUi(2, false),
  },
  leftIcon: {
    flexDirection: 'row',
    // marginLeft: scaleSizeUi(8, false),
    alignItems: 'center',
  },
  textNar: {
    fontSize: scaleSizeUi(20, true),
    fontWeight: '400',
    marginLeft: scaleSizeUi(10, false),
    color: colors.textColor02,
  },
});
