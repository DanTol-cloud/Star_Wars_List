import {View} from 'react-native';
import FemaleCounter from './ui/FemaleCounter';
import MaleCounter from './ui/MaleCounter';
import OthersCounter from './ui/OthersCounter';
import {styles} from './style';
import {GenderCount} from '../../pages/CharactersListScreen/ui/renderItem';
import {FC} from 'react';

const GenderCounter: FC<GenderCount> = ({female, male, others}) => {
  return (
    <View style={styles.genderContainer}>
      <FemaleCounter styles={styles.genderBlock} femaleCount={female} />
      <MaleCounter styles={styles.genderBlock} maleCount={male} />
      <OthersCounter styles={styles.genderBlock} otherCount={others} />
    </View>
  );
};

export default GenderCounter;
