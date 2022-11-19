import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {colors} from '../assets/colors';
import {useSelector, useDispatch} from 'react-redux';
import {
  deleteNote,
  getNote,
  markNote,
  markUndone,
} from '../redux/actions/actions';

const ModalCustome = ({modalVisible, setModalVisible}) => {
  const dispatch = useDispatch();

  const id = useSelector(state => state.idReducers);

  const handleMarkDone = () => {
    setModalVisible(!modalVisible);
    dispatch(markNote(id));
  };

  const handleMarkUnDone = () => {
    setModalVisible(!modalVisible);
    dispatch(markUndone(id));
  };

  const handleDelete = () => {
    setModalVisible(!modalVisible);
    dispatch(deleteNote(id));
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.button} onPress={handleMarkDone}>
              <Text style={styles.textStyle}>Set Done</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleMarkUnDone}>
              <Text style={styles.textStyle}>Set Undone</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleDelete}>
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Cancle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalCustome;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.buttonColor,
    marginTop: 5,
    marginBottom: 5,
    width: 120,
  },
  textStyle: {
    color: colors.background,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
