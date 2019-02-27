import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewPhrase } from './actions/phrases.actions'
import PhraseInput from './PhraseInput'
import AppToolbar from './Toolbar'
import {reset} from 'redux-form';


class App extends Component {


  handleSubmit = (event, dispatch) => {
    event.preventDefault()
    this.props.addNewPhrase(this.state.newPhrase)
      // requires form name
    dispatch(reset("phraseForm"))
  }

  render() {
    let phrasesList = this.props.phrases
      .map((phrase, i) => {
        return ( 
          <li key={i}>{phrase}</li> 
        )
      })
   
    return (
      <div className="App">
      <AppToolbar />
      <div className="App-Body">
        <PhraseInput />
        <h2>List of phrases</h2>
        <ul>{phrasesList}</ul>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phrases: state.phrases
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewPhrase: bindActionCreators(addNewPhrase, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
