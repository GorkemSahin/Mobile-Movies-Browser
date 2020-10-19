import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';
import { THUMBNAIL_URL } from '@env'
import {useNavigation} from '@react-navigation/core';
import Rating from '../Rating';

export default ({ movie }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={()=>{navigation.navigate("Details", {movie})}}>
      <View style={ styles.cardContainer }>
        <View style={ styles.imageContainer }>
          <Image
            style={ styles.image }
            source={{ uri: THUMBNAIL_URL + movie.poster_path }}
          />
        </View>
        <View style={ styles.infoContainer }>
          <View style={ styles.titleContainer }>
            <Text style={ styles.title }>
              { movie.title || movie.name }
            </Text>
            <Rating style={ styles.rating } rating={ movie.vote_average } />
          </View>
          <View style={ styles.overviewContainer }>
            <Text ellipsizeMode={ 'tail' } numberOfLines={ 4 } style={ styles.overview }>
              { movie.overview }
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
