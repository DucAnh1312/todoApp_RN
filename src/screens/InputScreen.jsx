import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import InputNagbar from '../components/InputNagbar';
import {scaleSizeUi} from '../assets/scaleSizeUi';
import {colors} from '../assets/colors';
import {useDispatch} from 'react-redux';
import {getNote} from '../redux/actions/actions';

const InputScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const addNote = () => {
    dispatch(getNote(textInput));
    navigation.pop();
    setTextInput('');
  };

  return (
    <View>
      <InputNagbar navigation={navigation} addNote={addNote} hide={true} />
      <View style={styles.writeTaskWrapper}>
        <TextInput
          underlineColorAndroid="transparent"
          multiline={true}
          style={styles.input}
          autoFocus={true}
          onChangeText={text => setTextInput(text)}
        />
      </View>
    </View>
  );
};

export default InputScreen;

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
  },
});
