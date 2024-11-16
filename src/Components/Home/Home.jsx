import React from 'react';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import auth from '../../firebase/firebase.config';

const Home = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then(result =>console.log(result))
  }
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => console.log(result))
  }
  return (
    <div>
      <button className='btn' onClick={handleGoogleLogin}>Google</button>
      <button className='btn' onClick={handleGithubLogin}>Github</button>
    </div>
  );
};

export default Home;