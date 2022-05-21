import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const Card = ({titulo, children}) => {
  return (
    <View style={style.card_container}>
      <View style={style.card}>
        <View style={style.card_header}>
          <Text>{titulo}</Text>
        </View>
        <View style={style.card_content}>
          {/* <Text style={style.card_container_text}>
            Experiência Profissional
          </Text>
          <Text style={style.card_container_text}>
            Experiência Profissional
          </Text>
          <Text style={style.card_container_text}>
            Experiência Profissional
          </Text> */}
          {children}
        </View>
      </View>
    </View>
  );
};

export default Card;
