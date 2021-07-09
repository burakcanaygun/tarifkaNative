import {Dimensions, StyleSheet} from 'react-native';
// import { colors, fonts, metrics } from 'styles';
const screenSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1},
  mealImage: {
    width: screenSize.width,
    minHeight: 350,
    backgroundColor: 'red',
    resizeMode: 'cover',
  },
  mealTitle: {
    color: '#A52A2A',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
  },
  mealArea: {
    color: '#A52A2A',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
  },
  mealDescription: {
    padding: 5,
  },
  youtubeButton: {
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 30,
    marginHorizontal: 30,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  youtubeText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
});

export default styles;
