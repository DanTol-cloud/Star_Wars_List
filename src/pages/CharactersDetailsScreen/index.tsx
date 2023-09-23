import {Image, Text, View} from 'react-native';
import {FC, useCallback, useEffect} from 'react';
import {useTypeSelector} from '../../hooks/UseTypeSelector';
import {useActions} from '../../hooks/UseAction';
import {CharactersType} from '../../types/globalTypes/charactersType';
import {styles} from './styles';
// @ts-ignore
import Avatar from '../../assets/star-wars-avatar.png';

type RootType = {
  params: {item: CharactersType};
};

interface CharactersDetailsProps {
  route: RootType;
}
const CharactersDetailsScreen: FC<CharactersDetailsProps> = ({route}) => {
  const {item} = route.params;
  const {fetchPlanetNames} = useActions();
  const {planet, error, loading} = useTypeSelector(state => state.planet);

  const fetch = useCallback(() => {
    fetchPlanetNames(item.homeworld);
  }, [item.homeworld]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.characterCard}>
        <Text style={styles.headline}>{item.name}'s Info</Text>
        <View style={styles.cardInfo}>
          <View>
            <Image style={styles.avatar} source={Avatar} />
          </View>
          <View>
            <Text style={styles.infoLines}>height: {item.height}</Text>
            <Text style={styles.infoLines}>mass: {item.mass}</Text>
            <Text style={styles.infoLines}>skin color: {item.skin_color}</Text>
            <Text style={styles.infoLines}>eye color: {item.eye_color}</Text>
            <Text style={styles.infoLines}>
              homeworld: {loading ? 'loading...' : planet}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharactersDetailsScreen;
