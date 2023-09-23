import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {GenderCount} from '../../pages/CharactersListScreen/ui/renderItem';
import {FC} from 'react';

interface ClearButtonProps {
  setGenderCount: ({}: GenderCount) => void;
  setSelectedItem: ([]) => void;
}

const ClearButton: FC<ClearButtonProps> = ({
  setGenderCount,
  setSelectedItem,
}) => {
  const clearState = () => {
    setGenderCount({female: 0, male: 0, others: 0});
    setSelectedItem(new Array());
  };

  return (
    <View style={styles.clearButtonContainer}>
      <TouchableOpacity onPress={clearState}>
        <Text style={styles.btnText}>CLEAR FANS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClearButton;
