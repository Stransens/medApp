import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {container, pages} from '../../styles';
import EmptyState from '../../commonComponents/emptyState';
import MedicationLine from './components/medicationLine';

//placeholder without API
let medications = [
      {
            id: 1,
            time: '12:03',
            name: 'analgin',
            used: true,
      },
      {
            id: 2,
            time: '09:00',
            name: 'aspirin',
            used: false,
      },
];

export default class Medication extends Component {
      constructor(props) {
            super(props);
      }

      renderItem = ({item}) => (
          <MedicationLine item={item}/>
      );

      render() {
            return (
                <View style={container.mainContainer}>
                      <Text style={pages.title}>Medication</Text>
                      {medications.length > 0 ? <FlatList
                          data={medications}
                          renderItem={this.renderItem}
                          keyExtractor={item => `med_id_${item.id}`}
                      /> : <EmptyState text='No medications today...'/>
                      }
                </View>
            );
      }
}
