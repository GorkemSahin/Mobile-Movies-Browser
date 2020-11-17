import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { featuredMovieSelector } from '../../appState/media/selectors';
import FeaturedCarousel from '../../containers/FeaturedCarousel';
import FeaturedMediaCard from '../../components/FeaturedMediaCard';
import styles from './styles';

// You can configure which categories to display by changing this file.
import discoverConstants from '../../utils/discoverConstants';

export default () => {

  const featuredMedia = useSelector(featuredMovieSelector);

  return (
    <View style={ styles.container }>
      <ScrollView showsVerticalScrollIndicator={false}>
        { featuredMedia ? <FeaturedMediaCard media={ featuredMedia } containerStyle={ styles.featuredContainer }/> : <></> }
        {
          discoverConstants.map((category) =>
            <FeaturedCarousel key={ category.mediaType + category.genreId } category={ category } containerStyle={ styles.categoryContainer }/>)
        }
      </ScrollView>
    </View>
  );
};
