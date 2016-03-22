
const React = require('react-native');
const {
  Component,
  Image,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

import assets from './assets/';
import MovieListScreen from './MovieListScreen';
import MovieDetailsScreen from './MovieDetailsScreen';
import styles from './styles/LoginScreen.styles';

export const ROUTE_ID_LOGIN = 'login';
export const ROUTE_ID_MOVIE_LIST = 'movie_list';
export const ROUTE_ID_MOVIE_DETAILS = 'movie_details';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handlePressButton = this._handlePressButton.bind(this);
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        configureScene={(route) => { return Navigator.SceneConfigs.PushFromRight; }}
        initialRoute={{id: ROUTE_ID_LOGIN}}
        navigationBar={this._getNavigationBar()}
        renderScene={this._renderScene}/>
    );
    this._navigator = this.refs.navigator;
  }

  _renderScene(route) {
    const props = {
      ... route,
      navigator: this.refs.navigator,
      user: 'jamiecheng'
    };

    switch (route.id) {
      case ROUTE_ID_MOVIE_LIST:
        return <MovieListScreen {...props}/>;
      case ROUTE_ID_MOVIE_DETAILS:
        return <MovieDetailsScreen {...props}/>;
      default:
        return this._renderLoginScreen();
    }
  }

  _renderLoginScreen() {
    return (
      <View style={styles.container}>
        <Text onPress={this._handlePressButton} style={styles.button}>GO</Text>
      </View>
    );
  }

  _handlePressButton() {
    this.refs.navigator.push({id: ROUTE_ID_MOVIE_LIST});
  }

  _getNavigationBar() {
    return <Navigator.NavigationBar routeMapper={this._getNavigationBarRouteMapper()} style={styles.navBar} />;
  }

  _getNavigationBarRouteMapper() {
    return {
      LeftButton: (route, navigator, index, navState) => {
        switch (route.id) {
          case ROUTE_ID_LOGIN:
          case ROUTE_ID_MOVIE_LIST:
            return null;
          case ROUTE_ID_MOVIE_DETAILS:
            return <Text style={styles.navBarText} onPress={() => {this.refs.navigator.pop();}}>Back</Text>
        }
      },
      RightButton: (route, navigator, index, navState) => {
        return null;
      },
      Title: (route, navigator, index, navState) => {
        switch (route.id) {
          case ROUTE_ID_LOGIN:
            return null;
          case ROUTE_ID_MOVIE_LIST:
          case ROUTE_ID_MOVIE_DETAILS:
            return <Image style={styles.logoOnNavBar} source={assets.logo} />;
        }
      }
    };
  }
}

module.exports = LoginScreen;
