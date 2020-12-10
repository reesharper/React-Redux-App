import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPics } from './actions/index'

const App =({ image, isFetching, error, getPics }) => {

  useEffect(() => {
    getPics();
  }, []);

  if (error) {
    return <h2>Sorry for the inconvenience: {error} </h2>
  }

  if (isFetching) {
    return <h2>Finding your image</h2>
  }

  const handleClick = () => {
    getPics();
  }

  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={handleClick}>Get New Image</button>
      <img src={image} alt='background scenery'/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    image: state.image,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getPics })(App);
