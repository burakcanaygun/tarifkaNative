import {Dimensions, StyleSheet} from 'react-native';
// import { colors, fonts, metrics } from 'styles';

const screenSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    minHeight: screenSize.height / 4,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealImage: {
    resizeMode: 'cover',
    height: screenSize.height / 4,
    width: screenSize.width / 1.1,
    flex: 1,
    borderRadius: 10,
    position: 'absolute',
  },
  mealNameContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  mealText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: screenSize.width / 1.1,
    height: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default styles;
