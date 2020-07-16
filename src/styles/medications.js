import {StyleSheet} from 'react-native';

export const medications = StyleSheet.create({
      line: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: 'tomato',
            borderRadius: 8,
            marginBottom: 8,
            backgroundColor: '#fff',
      },
      leftBlock: {
            flexDirection: 'row',
            alignItems: 'center',
      },
      time: {
            fontStyle: 'italic',
            fontWeight: 'bold',
            marginRight: 20,
      },
      name: {
            fontSize: 18,
      },
      checkBoxWrapper: {
            fontSize: 18,
      },
      block: {
            width: 300,
            borderWidth: 2,
            alignSelf: 'center',
            padding: 20,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 18,
            borderColor: 'tomato',
            shadowColor: "tomato",
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
      },
      blockName: {
            fontSize: 22,
            textTransform: 'uppercase',
            marginBottom: 30,
            fontWeight: 'bold',
      },
      blockTime: {
            fontSize: 16,
            fontStyle: 'italic',
            fontWeight: 'bold',
      }
});

