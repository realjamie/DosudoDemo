
const React = require('react-native');
const {
  Component,
  Image,
  ListView,
  Navigator,
  PropTypes,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

import styles from './styles/MovieDetailsScreen.styles';

class MovieDetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.movie.posters.detailed}} style={styles.thumbnail}/>
        <Text style={styles.text}>{this.props.movie.title} ({this.props.movie.year})</Text>
      </View>
    );
  }
}
MovieDetailsScreen.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieDetailsScreen;
