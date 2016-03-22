
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

import assets from './assets/';
import { posts } from './data/';
import styles from './styles/PostListScreen.styles';

class PostListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts
    };
    this._dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this._renderRow = this._renderRow.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this._dataSource.cloneWithRows(this.state.posts)} renderRow={this._renderRow} />
        <Image source={assets.toolbar} style={styles.toolbar} />
      </View>
    );
  }

  _renderRow(post) {
    return (
      <View>
        <View style={styles.row}>
          <Image source={{uri: post.profilePicUri}} style={styles.profilePicture} />
          <Text style={styles.captionText}>{post.userId}</Text>
        </View>
        <Image source={{uri: post.image}} style={styles.image} />
        <TouchableOpacity onPress={this._handlePressLike.bind(this, post.id)}>
          <Image source={post.liked ? assets.heart :assets.emptyHeart} style={styles.likedIcon} />
        </TouchableOpacity>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Image source={assets.blueHeart} style={styles.blueHeart} />
          <Text style={styles.captionText}>{post.numberOfLikes + (post.liked ? 1 : 0)} likes</Text>
        </View>
        {this._renderComments(post.comments)}
        <Text style={styles.time}>{post.time}</Text>
      </View>
    );
  }

  _renderComments(comments) {
    return comments.map((comment) => {
      return <Text key={comment.id} style={[styles.captionText, styles.commentRow]}>{comment.userId}<Text style={styles.commentText}> {comment.text}</Text></Text>
    });
  }

  _handlePressLike(postId) {
    const postIndex = this.state.posts.findIndex((postInData) => postInData.id === postId);
    const liked = this.state.posts[postIndex].liked ? true : false
    let posts = this.state.posts;
    posts[postIndex].liked = !liked;
    this.setState({ posts });
  }
}

export default PostListScreen;
