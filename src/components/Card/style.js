import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  card_content: {
    marginTop: 20,
  },
  card_container_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default style;
