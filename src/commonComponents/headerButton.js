import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {SvgElement} from './svgElement';
import {common} from '../styles'

export default function HeaderButton() {
      return (
          <TouchableOpacity style={common.headerButtonWrapper} onPress={() => Alert.alert(
              'Alert',
              'Here will be some menu',
              [
                    {
                          text: 'Ok',
                    },
              ],
              {cancelable: false},
          )}>
                <SvgElement name='Menu' fill='tomato' width={20} height={20}/>
          </TouchableOpacity>
      );
}
