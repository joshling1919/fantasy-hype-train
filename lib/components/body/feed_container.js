import { connect } from 'react-redux';

import Feed from './feed';

import { requestPlayers } from '../../actions/feed_actions';


const mapStateToProps = state => ({
  feed: state.feed.feed,
  isLoading: state.feed.isLoading
});


const mapDispatchToProps = dispatch => ({
  requestPlayers: () => dispatch(requestPlayers())
});




export default connect(
  mapStateToProps, mapDispatchToProps
)(Feed);
