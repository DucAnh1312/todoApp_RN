import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Task from './Task';

import {useSelector, useDispatch} from 'react-redux';
import {deleteNote, getNote, markNote, getId} from '../redux/actions/actions';
import ModalCustome from './ModalCustome';
import {scaleSizeUi} from '../assets/scaleSizeUi';

const Body = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const noteData = useSelector(state => state.noteReducers);
  const dispatch = useDispatch();

  const longHold = id => {
    setModalVisible(true);
    dispatch(getId(id));
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {noteData.map(data => (
            <View key={data.id}>
              <Task
                navigation={navigation}
                longHold={longHold}
                id={data.id}
                completed={data.completed}
                task={data.task}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <ModalCustome
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    width: '95%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
