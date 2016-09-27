import { connect } from 'react-redux';

import App from './app';


const mapStateToProps = state => ({
  count: state.count
});


// const mapDispatchToProps = dispatch => ({
//   requestLesson: lessonId => dispatch(requestLesson(lessonId)),
//   deleteLesson: lessonId => dispatch(deleteLesson(lessonId))
// });
//



export default connect(
  mapStateToProps, null
)(App);
