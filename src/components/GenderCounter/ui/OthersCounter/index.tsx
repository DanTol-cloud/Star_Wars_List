import { Text, View } from "react-native";
import {FC} from 'react';

interface OtherCounterProps {
  otherCount: number;
  styles: any;
}

const OtherCounter: FC<OtherCounterProps> = ({otherCount, styles}) => {
  return (
    <View style={styles}>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>{otherCount}</Text>
      <Text style={{color: 'black'}}>Others</Text>
    </View>
  );
};

export default OtherCounter;
