import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {medications} from '../../../styles';
import CheckBox from '../../../commonComponents/checkbox';

export default function MedicationLine(props) {
      const navigation = useNavigation();
      const [used, setUsed] = useState(props.item.used);
      return (
          <TouchableOpacity style={medications.line} onPress={() => navigation.navigate('MedicationDetails', { medication: props.item })}>
                <View style={medications.leftBlock}>
                      <Text style={medications.time}>{props.item.time}</Text>
                      <Text style={medications.name}>{props.item.name}</Text>
                </View>
                <TouchableOpacity style={medications.checkBoxWrapper} onPress={() => setUsed(!used)}>
                      <CheckBox state={used}/>
                </TouchableOpacity>
          </TouchableOpacity>
      );
}
