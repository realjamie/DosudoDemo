
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

import styles from './styles/MovieListScreen.styles';
import {ROUTE_ID_MOVIE_DETAILS} from './LoginScreen';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class MovieListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  }

  render() {
    if (this.state.loaded==null || !this.state.loaded) {
      return this._renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        style={styles.listView}
      />
    );
  }

  _renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  _renderRow(movie) {
    return (
      <TouchableOpacity onPress={this._handlePressRow.bind(this, movie)} style={styles.rowContainer}>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _handlePressRow(movie) {
    this.props.navigator.push({
      id: ROUTE_ID_MOVIE_DETAILS,
      movie: movie
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }
}
MovieListScreen.propTypes = {
  navigator: PropTypes.instanceOf(Navigator).isRequired
};

export default MovieListScreen;
