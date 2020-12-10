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
    return <img src='https://developer.roblox.com/assets/blt0fa990a7507d7a41/Loading-Screen-Animation.png' className='loading' alt='background scenery'/>
  }

  const handleClick = () => {
    getPics();
  }

  return (
    <div className="App">
      <h1>Background Tester</h1>
      <button onClick={handleClick}>Get New Image</button>
      <br />
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
