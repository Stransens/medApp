import {StyleSheet} from 'react-native';

export const pages = StyleSheet.create({
      title: {
            fontSize: 22,
            marginBottom: 20,
            fontWeight: 'bold',
            textAlign: 'center',
      },
      emptyDataBox: {
            padding: 40,
      },
      emptyDataText: {
            fontSize: 16,
            textAlign: 'center',
      },
});

export const common = StyleSheet.create({
      headerButtonWrapper: {
            padding: 6,
            borderWidth: 1,
            borderColor: 'tomato',
            borderRadius: 4,
            marginHorizontal: 8,
      }
})
