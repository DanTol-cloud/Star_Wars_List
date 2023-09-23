import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    width: 50,
    height: 35,
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
  },
});
