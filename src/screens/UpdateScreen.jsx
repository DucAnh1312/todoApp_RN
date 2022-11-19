import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import InputNagbar from '../components/InputNagbar';
import {colors} from '../assets/colors';
import {scaleSizeUi} from '../assets/scaleSizeUi';
import {useSelector, useDispatch} from 'react-redux';

const UpdateScreen = ({navigation}) => {
  const [textInput, setTextInput] = useState('');
  const id = useSelector(state => state.idReducers);
  const noteData = useSelector(state => state.noteReducers);
  const noteDetail = noteData.find(e => e.id == id);

  return (
    <View>
      <InputNagbar navigation={navigation} hide={false}/>
      <View style={styles.writeTaskWrapper}>
        {/* <TextInput
        //   underlineColorAndroid="transparent"
        //   multiline={true}
          style={styles.input}
          //   onChangeText={text => setTextInput(text)}
          value={noteDetail.task}
        /> */}
        <Text style={styles.input}>{noteDetail.task}</Text>
      </View>
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  writeTaskWrapper: {
    width: '100%',
    height: '80%',
    backgroundColor: colors.background,
    marginTop: scaleSizeUi(50, true),
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.background,
    color: colors.textColor01,
    fontSize: 15,
  },
});
