import {Image, TouchableOpacity} from 'react-native';
// @ts-ignore
import HeartPressedIcon from '../../assets/heart_presed.png';
// @ts-ignore
import HeartEmptyIcon from '../../assets/heart_empty.png';
import {FC} from 'react';
import {CharactersType} from '../../types/globalTypes/charactersType';
import {GenderCount} from '../../pages/CharactersListScreen/ui/renderItem';

interface heartButtonProps {
  item: CharactersType;
  index: number;
  selectedItem: [];
  setSelectedItem: ([]) => void;
  setGenderCount: ({}: GenderCount) => void;
  genderCount: GenderCount;
}

const HeartButton: FC<heartButtonProps> = ({
  item,
  index,
  selectedItem,
  setSelectedItem,
  setGenderCount,
  genderCount,
}) => {
  const {female, male, others} = genderCount;
  const onHeartPress = (gender: string, i: number) => {
    console.log(i)
    // @ts-ignore
    if (selectedItem.includes(i)) {
      const arr = selectedItem.filter(filterIndex => filterIndex !== i);
      setSelectedItem([...arr]);
    } else {
      setSelectedItem([...selectedItem, i]);
    }
    // @ts-ignore
    if (!selectedItem.includes(i, 0)) {
      switch (gender) {
        case 'female':
          {
            setGenderCount({...genderCount, female: female + 1});
          }
          break;
        case 'male':
          {
            setGenderCount({...genderCount, male: male + 1});
          }
          break;
        default: {
          setGenderCount({...genderCount, others: others + 1});
        }
      }
    } else {
      switch (gender) {
        case 'female':
          {
            setGenderCount({...genderCount, female: female - 1});
          }
          break;
        case 'male':
          {
            setGenderCount({...genderCount, male: male - 1});
          }
          break;
        default: {
          setGenderCount({...genderCount, others: others - 1});
        }
      }
    }
  };

  return (
    <TouchableOpacity
      style={{width: 20, height: 20}}
      onPress={() => onHeartPress(item.gender, index)}>
      <Image
        key={index}
        style={{width: 20, height: 20}}
        source={
          // @ts-ignore
          selectedItem.includes(index) ? HeartPressedIcon : HeartEmptyIcon
        }
      />
    </TouchableOpacity>
  );
};

export default HeartButton;
