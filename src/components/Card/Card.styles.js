import {Dimensions, StyleSheet} from 'react-native';
// import { colors, fonts, metrics } from 'styles';
const screenSize = Dimensions.get('window');
const styles = StyleSheet.create({
  cardContainer: {
    height: screenSize.height / 10,
    width: screenSize.width,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderRadius: 20,
    marginVertical: 5,
  },
  cardImage: {
    minHeight: 60,
    width: 60,
    resizeMode: 'center',
    borderRadius: 30,
  },
  cardBodyContainer: {
    marginLeft: 5,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  category: {
    fontSize: 18,
  },
});

export default styles;
