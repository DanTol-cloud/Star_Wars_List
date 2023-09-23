import {Text, View} from 'react-native';
import {FC} from 'react';

interface FemaleCounterProps {
  femaleCount: number;
  styles: any;
}

const FemaleCounter: FC<FemaleCounterProps> = ({femaleCount, styles}) => {
  return (
    <View style={styles}>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>{femaleCount}</Text>
      <Text style={{color: 'black'}}>Male Fans</Text>
    </View>
  );
};

export default FemaleCounter;
