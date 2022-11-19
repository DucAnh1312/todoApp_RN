import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors';
import {scaleSizeUi} from '../assets/scaleSizeUi';
import Header from '../components/Header';
import Body from '../components/Body';
import AddButton from '../components/AddButton';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Body navigation={navigation}/>
      <AddButton navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: scaleSizeUi(375, false),
    height: scaleSizeUi(812, true),
  },
});
