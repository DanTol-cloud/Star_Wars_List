import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import HeartButton from '../../../../components/HeartButton';
import {FC} from 'react';
import {CharactersType} from '../../../../types/globalTypes/charactersType';
import {styles} from './style';

export interface GenderCount {
  female: number;
  male: number;
  others: number;
}

interface renderItemProps {
  item: CharactersType;
  index: number;
  loading: boolean;
  navigation: any;
  selectedItem: [];
  setSelectedItem: ([]) => void;
  setGenderCount: ({}: GenderCount) => void;
  genderCount: GenderCount;
}

const renderItem: FC<renderItemProps> = ({
  item,
  index,
  loading,
  navigation,
  selectedItem,
  setSelectedItem,
  setGenderCount,
  genderCount,
}) => {
  return (
    <>
      <View style={styles.container} key={index}>
        <HeartButton
          item={item}
          index={index}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setGenderCount={setGenderCount}
          genderCount={genderCount}
        />
        <TouchableOpacity
          style={styles.section}
          onPress={() => navigation.navigate('Details', {item})}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.text}>{item.birth_year}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>{item.gender}</Text>
        </View>
      </View>
    </>
  );
};

export default renderItem;
