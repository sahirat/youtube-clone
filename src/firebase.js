import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyA8OiCh1SRGce6qn-csb9Lhto28Il3J4nQ',
   authDomain: 'not-yt.firebaseapp.com',
   projectId: 'not-yt',
   storageBucket: 'not-yt.appspot.com',
   messagingSenderId: '713650135776',
   appId: '1:713650135776:web:3612f40b495bd9e6ef6685',
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
