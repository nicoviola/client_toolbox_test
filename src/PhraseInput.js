import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewPhrase } from './actions/phrases.actions'
import Button from '@material-ui/core/Button';


let PhraseInput = ({ handleSubmit, addNewPhrase }) => {

  function addPhrase({ newPhrase }) {
    addNewPhrase(newPhrase);
    
  }


  return (
    <div className="App-Body">
    <form onSubmit={handleSubmit(addPhrase)} name="phraseForm">
      <Field
        type="text"
        name="newPhrase"
        component="input"
        placeholder="Phrase to post"
      ></Field>
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
    </div>
  )

}

PhraseInput = reduxForm({
  form: 'phrase_input'
})(PhraseInput)

function mapStateToProps(state) {
  return {
    initialValues: { newPhrase: '' }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewPhrase: bindActionCreators(addNewPhrase, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhraseInput);