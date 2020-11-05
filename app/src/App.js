
import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from './actions/actions'

const App = (props) => {

  useEffect(() => {
    props.fetchJokes();
  }, []);


  return (
    <div>
      <h2>Joke Generator</h2>
      {props.isLoading ? <p>Loading jokes...</p> : null}
      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      {props.jokes.map((joke) => (
        <div className='joke'>
          <h3>{joke.setup}</h3>
          <h4> {joke.punchline} </h4>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    jokes: state.jokeData,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchJokes })(App);
