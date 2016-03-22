
const React = require('react-native');
const {
  Component,
  Image,
  Navigator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

import assets from './assets/';
import PostListScreen from './PostListScreen';
import styles from './styles/LoginScreen.styles';

export const ROUTE_ID_LOGIN = 'login';
export const ROUTE_ID_POST_LIST = 'post_list';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handlePressLogin = this._handlePressLogin.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <Navigator
          ref="navigator"
          configureScene={(route) => { return Navigator.SceneConfigs.PushFromRight; }}
          initialRoute={{id: ROUTE_ID_LOGIN}}
          navigationBar={this._getNavigationBar()}
          renderScene={this._renderScene}/>
      </View>
    );
  }

  _renderScene(route) {
    switch (route.id) {
      case ROUTE_ID_POST_LIST:
        return <PostListScreen />;
      default:
        return this._renderLoginScreen();
    }
  }

  _renderLoginScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.logo} source={assets.logo} />
          <Text style={styles.text}>Sign up to see photos and videos</Text>
          <Text style={styles.text}>from your friends.</Text>
        </View>
        <View style={styles.middleContainer}>
          <TouchableOpacity style={styles.loginWithFacebookButton} onPress={this._handlePressLogin}>
            <Image style={styles.facebookIcon} source={assets.facebookIcon}/>
            <Text style={styles.loginWithFacebookText}>Log In With Facebook</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orSeparator} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orSeparator} />
          </View>
          <Text style={[styles.text, styles.boldText]}>Sign Up With Phone or Email</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomContainerText}>Already have an account?
            <Text style={styles.boldText}> Sign In.</Text>
          </Text>
        </View>
      </View>
    );
  }

  _handlePressLogin() {
    this.refs.navigator.push({id: ROUTE_ID_POST_LIST});
  }

  _getNavigationBar() {
    return <Navigator.NavigationBar routeMapper={this._getNavigationBarRouteMapper()} style={styles.navBar} />;
  }

  _getNavigationBarRouteMapper() {
    return {
      LeftButton: (route, navigator, index, navState) => {
        switch (route.id) {
          case ROUTE_ID_LOGIN:
          case ROUTE_ID_POST_LIST:
            return null;
        }
      },
      RightButton: (route, navigator, index, navState) => {
        return null;
      },
      Title: (route, navigator, index, navState) => {
        switch (route.id) {
          case ROUTE_ID_LOGIN:
            return null;
          case ROUTE_ID_POST_LIST:
            return <Image style={styles.logoOnNavBar} source={assets.logo} />;
        }
      }
    };
  }
}

module.exports = LoginScreen;
