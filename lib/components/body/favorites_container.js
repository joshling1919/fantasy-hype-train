import { connect } from 'react-redux';

import Favorites from './favorites';

import { requestFavorites } from '../../actions/favorites_actions';


const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
  isLoading: state.favorites.isLoading
});


const mapDispatchToProps = dispatch => ({
  requestFavorites: params => dispatch(requestFavorites(params))
});




export default connect(
  mapStateToProps, mapDispatchToProps
)(Favorites);
