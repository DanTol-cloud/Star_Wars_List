import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  list: {
    flex: 1,
    width: 500,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  block: {
    borderWidth: 0.7,
    borderColor: 'black',
    marginLeft: 20,
  },
  clearBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    marginLeft: 165,
  },
});
