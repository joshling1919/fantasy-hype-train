import { connect } from 'react-redux';

import { goToSettings,
         goToFeed,
         goToFavorites
       } from '../../actions/nav_bar_actions';

import NavBar from './nav_bar';


// const mapStateToProps = state => ({
//   selectedButton: state.selectedButton
// });


const mapDispatchToProps = dispatch => ({
  goToSettings: () => dispatch(goToSettings()),
  goToFeed: () => dispatch(goToFeed()),
  goToFavorites: () => dispatch(goToFavorites())
});




export default connect(
  null, mapDispatchToProps
)(NavBar);
