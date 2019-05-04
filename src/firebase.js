import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDQilQUCo3_Xkf7tx7cIP_iISd1U-Di_oQ",
  authDomain: "cursoredux-145fb.firebaseapp.com",
  databaseURL: "https://cursoredux-145fb.firebaseio.com",
  projectId: "cursoredux-145fb",
  storageBucket: "cursoredux-145fb.appspot.com",
  messagingSenderId: "791312215766",
  appId: "1:791312215766:web:4dfc88139fa1cfaa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function login(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(snap => snap.user);
}
