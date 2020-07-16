import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import EmptyState from '../../commonComponents/emptyState';
import {container, pages} from '../../styles';

//placeholder without API
let events = [];

export default class Calendar extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                <View style={container.mainContainer}>
                      <Text style={pages.title}>Events list</Text>
                      {events.length > 0 ? <FlatList
                          data={events}
                          renderItem={this.renderItem}
                          keyExtractor={item => item.id}
                      /> : <EmptyState text='Nothing here...'/>}
                </View>
            );
      }
}
