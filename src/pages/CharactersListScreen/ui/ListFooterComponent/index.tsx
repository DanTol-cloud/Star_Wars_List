import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FC, useCallback, useEffect, useState} from 'react';

// @ts-ignore
import LeftArrow from '../../../../assets/left-arrow.png';
// @ts-ignore
import RightArrow from '../../../../assets/right-arrow.png';

import {useActions} from '../../../../hooks/UseAction';
import {useTypeSelector} from '../../../../hooks/UseTypeSelector';
import {styles} from './style';

interface ListFooterProps {
  setCurrentPage: (value: number) => void;
  currentPage: number;
  firstCharIndex: number;
  lastCharIndex: number;
}

const ListFooterComponent: FC<ListFooterProps> = ({
  setCurrentPage,
  currentPage,
  firstCharIndex,
  lastCharIndex,
}) => {
  const {fetchCharactersCount} = useActions();
  const {count} = useTypeSelector(state => state.count);

  const [charactersPerPage] = useState(10);

  useEffect(() => {
    fetchCharactersCount();
  }, []);

  let pages = [];

  for (let i = 1; i <= Math.ceil(count / charactersPerPage); i++) {
    pages.push(i);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.elemCount}>
        {currentPage !== pages.length
          ? `${firstCharIndex + 1} - ${lastCharIndex} of ${count}`
          : `${firstCharIndex + 1} - ${count} of ${count}`}
      </Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          disabled={currentPage === 1}
          onPress={() => setCurrentPage(currentPage - 1)}>
          <Image style={styles.arrow} source={LeftArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={currentPage === pages.length}
          onPress={() => setCurrentPage(currentPage + 1)}>
          <Image style={styles.arrow} source={RightArrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListFooterComponent;
