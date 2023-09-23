import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  characterCard: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatar: {width: 80, height: 80},
  headline: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
  infoLines: {fontSize: 16, fontWeight: '800', color: 'black'},
});
