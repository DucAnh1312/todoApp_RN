import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleSizeUi} from '../assets/scaleSizeUi';
import {colors} from '../assets/colors';
import Icon from 'react-native-vector-icons/Feather';

import {useSelector} from 'react-redux';

const Header = () => {
  const noteData = useSelector(state => state.noteReducers);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Tất cả ghi chú</Text>
      <Text style={styles.text}>{noteData.length} ghi chú </Text>
      <View style={styles.listIcon}>
        <View style={styles.leftIcon}>
          <TouchableOpacity style={styles.icon}>
            <Icon
              name="menu"
              size={scaleSizeUi(25, true)}
              color={colors.iconColor02}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rightIcon}>
          <TouchableOpacity style={styles.icon}>
            <Icon
              name="search"
              size={scaleSizeUi(25, true)}
              color={colors.iconColor02}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon
              name="more-vertical"
              size={scaleSizeUi(25, true)}
              color={colors.iconColor02}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: scaleSizeUi(375, false),
    height: scaleSizeUi(280, true),
    // backgroundColor: 'red'
  },
  textHeader: {
    marginTop: scaleSizeUi(100, true),
    fontSize: scaleSizeUi(35, true),
    fontWeight: '400',
    color: colors.textColor01,
    textAlign: 'center',
  },
  text: {
    marginTop: scaleSizeUi(5, true),
    fontSize: scaleSizeUi(15, true),
    textAlign: 'center',
    color: colors.textColor02,
  },
  listIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleSizeUi(50, true),
  },
  icon: {
    width: scaleSizeUi(40, false),
    height: scaleSizeUi(40, true),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleSizeUi(5, false),
    marginLeft: scaleSizeUi(5, false),
    // backgroundColor: 'blue',
    borderRadius: 50,
  },
  rightIcon: {
    flexDirection: 'row',
    // marginRight: scaleSizeUi(5, false),
  },
  leftIcon: {
    marginLeft: scaleSizeUi(5, false),
  },
});
