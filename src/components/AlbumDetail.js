import React from 'react';
import {View, Text} from 'react-native';

/* Presentational : functional component. No need
to access state */

const AlbumDetail = (props) => {
  return(
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
