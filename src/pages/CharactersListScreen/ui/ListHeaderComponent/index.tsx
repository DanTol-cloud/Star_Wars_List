import {View, Image, Text, TextInput} from 'react-native';
// @ts-ignore
import HeartIcon from '../../../../assets/heart.png';
import {styles} from './style';
import {infoData} from './data';
import {memo, useCallback, useState} from 'react';
import {useActions} from '../../../../hooks/UseAction';

// @ts-ignore
import SearchIcon from '../../../../assets/search.png';

const ListHeaderComponent = () => {
  const {searchCharacters} = useActions();

  const [text, onChangeText] = useState('');

  const search = useCallback(
    (value: string) => {
      searchCharacters(value);
    },
    [searchCharacters],
  );
  const onChange = (value: string) => {
    onChangeText(value);
    search(value);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={HeartIcon} />
        </View>
        {infoData.map(item => (
          <View style={styles.box}>
            <Text style={styles.columnNames}>{item.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={SearchIcon} />
        <TextInput
          onChangeText={value => onChange(value)}
          value={text}
          placeholderTextColor="black"
          placeholder="Search"
          style={{flex: 1, color: 'black'}}
        />
      </View>
    </>
  );
};

export default memo(ListHeaderComponent);
