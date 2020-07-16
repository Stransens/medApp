import React from 'react';
import {Text, View} from 'react-native';
import {container, medications} from '../../styles';

export default function MedicationDetails({navigation, route}) {
      React.useLayoutEffect(() => {
            navigation.setOptions({
                  title: 'Medication Details',
                  headerBackTitle: null,
                  headerTintColor: 'tomato',
                  headerTitleStyle: {
                        color: '#000',
                  },
            });
      }, [navigation]);

      return <View style={container.mainContainer}>
            <View style={medications.block}>
                  <Text style={medications.blockName}>{route.params.medication.name}</Text>
                  <Text style={medications.blockTime}>{route.params.medication.time}</Text>
            </View>
      </View>;

}
