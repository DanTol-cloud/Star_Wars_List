import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
  },
  box: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    borderColor: 'gray',
  },
  imgContainer: {
    width: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    borderColor: 'gray',
  },
  img: {
    width: 15,
    height: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnNames: {color: 'black'},
});
