import React from 'react';
import {View, Text} from 'react-native';
import {pages} from '../styles';

export default function EmptyState(props) {
      return (
          <View style={pages.emptyDataBox}>
                <Text style={pages.emptyDataText}>{props.text}</Text>
          </View>
      )
}
