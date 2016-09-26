import { connect } from 'react-redux';
import Count from './count';

import {addCount} from '../../actions/count_actions';


const mapStateToProps = state => {
  debugger;
  return({
    count: state.count
  });
};

// const mapDispatchToProps = dispatch => ({
//   addCount: () => dispatch(addCount())
// });




export default connect(
  mapStateToProps, null
)(Count);
