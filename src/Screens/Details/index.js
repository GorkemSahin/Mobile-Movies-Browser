import React, { useEffect } from 'react';
import {Text, View, Image } from 'react-native';
import { IMAGE_URL } from '@env';
import styles from './styles';
import PlayButton from '../../components/PlayButton';
import Rating from '../../components/Rating';

export default ({ route }) => {
  const { media } = route.params;

  return (
    <View style={ styles.container }>
      <Image style={ styles.image } source={{ uri: IMAGE_URL + media.poster_path }}/>
      <View style={ styles.descriptionContainer }>
        <PlayButton style={ styles.playButton } onPress={ ()=>{ navigation.navigate("Player", { sample: true }) }}></PlayButton>
        <View style={ styles.ratingContainer }>
          <Rating style={ styles.rating } textStyle={{ fontWeight: "bold" }} rating={ media.vote_average }/>
        </View>
        <View style={ styles.overviewContainer }>
          <Text style={ styles.overview }>
            { media.overview }
          </Text>
        </View>
      </View>
    </View>
  );
};
