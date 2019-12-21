import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { movieslist, directorslist } from "../actions";
import MoviesList from "../components/movieslist";
import DirectorsList from "../components/directorslist";

class App extends Component {
  componentWillMount() {
    this.props.movieslist();
    this.props.directorslist();
  }

  render() {
    return (
      <div>
        <MoviesList {...this.props} />
        <DirectorsList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies,
    info: state.directors
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      movieslist,
      directorslist
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
