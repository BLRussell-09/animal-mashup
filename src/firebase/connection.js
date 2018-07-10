import firebase from 'firebase';
import constants from '../constants';

const firebaseApp = () =>
{
  return firebase.initializeApp(constants.firebaseConfig);
};

export default firebaseApp;
