import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';

import ListHeaderComponent from './ui/ListHeaderComponent';

import GenderCounter from '../../components/GenderCounter';
import ClearButton from '../../components/ClearButton';
import ListFooterComponent from './ui/ListFooterComponent';
import {useNavigation} from '@react-navigation/native';
import renderItem from './ui/renderItem';
import {useTypeSelector} from '../../hooks/UseTypeSelector';
import {useActions} from '../../hooks/UseAction';
import {ICharactersType} from '../../types/globalTypes/charactersType';
import {styles} from './styles';

const CharactersList: React.FC = () => {
  const {fetchCharactersList} = useActions();
  const {characters, loading, error} = useTypeSelector(
    state => state.characters,
  );
  const navigation = useNavigation();

  const [selectedItem, setSelectedItem] = useState<any>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);

  const lastCharIndex = currentPage * charactersPerPage;
  const firstCharIndex = lastCharIndex - charactersPerPage;

  const [genderCount, setGenderCount] = useState({
    female: 0,
    male: 0,
    others: 0,
  });

  const {female, male, others} = genderCount;

  const fetch = useCallback(() => {
    fetchCharactersList(currentPage);
    console.log(characters);
  }, [currentPage]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.clearBtn}>
        <Text style={styles.mainText}>Fans</Text>
        <ClearButton
          setGenderCount={setGenderCount}
          setSelectedItem={setSelectedItem}
        />
      </View>
      <GenderCounter others={others} female={female} male={male} />
      <ScrollView horizontal style={{flex: 1}}>
        <View style={{flex: 1}}>
          {loading ? (
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" style={styles.indicator} />
            </View>
          ) : (
            <FlatList
              data={characters}
              keyExtractor={item => item.url.slice(29, item.url.length - 1)}
              style={styles.list}
              ListHeaderComponent={ListHeaderComponent}
              renderItem={({item}: ICharactersType) =>
                renderItem({
                  item,
                  index: parseInt(item.url.slice(29, item.url.length - 1), 10),
                  loading,
                  navigation,
                  selectedItem,
                  setSelectedItem,
                  setGenderCount,
                  genderCount,
                })
              }
              ListFooterComponent={() =>
                ListFooterComponent({
                  setCurrentPage,
                  currentPage,
                  firstCharIndex,
                  lastCharIndex,
                })
              }
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(CharactersList);
