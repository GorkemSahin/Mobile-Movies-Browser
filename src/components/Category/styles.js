import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';
import fonts from '../../constants/fonts';

export default StyleSheet.create({
  categoryContainer: {
    flex: 1,
    margin: distances.halfDistance,
    borderColor: colors.black
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: distances.halfDistance,
    marginHorizontal: distances.quarterDistance
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonStyle: {
    backgroundColor: colors.pink,
    padding: distances.halfDistance
  },
  titleStyle: {
    color: colors.white,
    fontSize: fonts.normal,
  },
  name: {
    fontSize: fonts.big,
    fontWeight: "bold",
    color: colors.pink
  }
});
