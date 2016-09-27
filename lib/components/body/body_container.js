import { connect } from 'react-redux';

import Body from './body';


const mapStateToProps = state => ({
  selectedButton: state.selectedButton
});


// const mapDispatchToProps = dispatch => ({
//   requestLesson: lessonId => dispatch(requestLesson(lessonId)),
//   deleteLesson: lessonId => dispatch(deleteLesson(lessonId))
// });
//



export default connect(
  mapStateToProps, null
)(Body);
