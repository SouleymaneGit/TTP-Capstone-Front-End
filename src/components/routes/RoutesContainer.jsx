
import React, { Component } from "react";
import RoutesView from "./RoutesView";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout, me } from "../../redux/teacher";
import { purge } from "../../redux/course/courseReducer";
import { purgeStudents } from "../../redux/student/studentReducer";
import { NavbarContainer } from '../containers'

class RoutesContainer extends Component {
  componentDidMount() {
    (this.props.isLoggedIn == true ? console.log("Logged in") : this.props.loadInitialData(this.props.isLoggedIn));
  }
  render() {
    return (
    <div>
      <NavbarContainer 
      isLoggedIn={this.props.isLoggedIn} 
      signout={this.props.signout} 
      purgeCourses={this.props.purgeCourses}
      purgeStudents={this.props.purgeStudents}/> 
      <RoutesView isLoggedIn={this.props.isLoggedIn} userId={this.props.userId} /> 
    </div>)
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.teacher.isLoggedIn,
    userId: state.teacher.email
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => dispatch(me()),
    signout: () => dispatch(logout()),
    purgeCourses: () => dispatch(purge()),
    purgeStudents: () => dispatch(purgeStudents())
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));