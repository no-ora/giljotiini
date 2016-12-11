import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import GameListContainer from '../containers/GameListContainer';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    const { todoState, todoActions } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header addTodo={todoActions.addTodo}/>
            <MainSection todos={todoState} actions={todoActions}/>
            <GameListContainer/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  todoState: PropTypes.array.isRequired,
  todoActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todoState: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
