import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {container, dashboard, pages} from '../../styles';
import {SvgElement} from '../../commonComponents/svgElement';
import EmptyState from '../../commonComponents/emptyState';

//placeholder without API
let messages = [];
let user = {
      name: 'Eugen',
      image: null,
};

export default class Dashboard extends Component {
      constructor(props) {
            super(props);
      }

      renderItem = ({ item }) => (
          <Text>{item}</Text>
      );
      render() {
            return (
                <View style={container.mainContainer}>
                      <View style={dashboard.greetingBox}>
                            <View style={dashboard.avatarBox}>
                                  {user.image ? <Image source={{uri: user.image.uri}}/> :
                                      <SvgElement name='Profile' height={70} width={70} fill='gray'/>}
                            </View>
                            <View style={dashboard.greetingTextBox}>
                                  <Text style={dashboard.greetingText}>Good morning, {user.name}</Text>
                            </View>
                      </View>
                      <Text style={pages.title}>Messages</Text>
                      {messages.length > 0 ? <FlatList
                          data={messages}
                          renderItem={this.renderItem}
                          keyExtractor={item => item.id}
                      /> : <EmptyState text='No symptoms today...' />}
                </View>
            );
      }
}
