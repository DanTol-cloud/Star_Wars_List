import {Text, View} from 'react-native';
import {FC} from 'react';

interface MaleCounterProps {
  maleCount: number;
  styles: any;
}

const MaleCounter: FC<MaleCounterProps> = ({maleCount, styles}) => {
  return (
    <View style={styles}>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>{maleCount}</Text>
      <Text style={{color: 'black'}}>Male Fans</Text>
    </View>
  );
};

export default MaleCounter;
