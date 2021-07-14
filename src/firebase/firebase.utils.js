import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


//crédentials pour la base de donnéss 
const config = {
    apiKey: "AIzaSyDICIOh_AmDSB5WqA2Xx7rpp8A3hVhQJZw",
    authDomain: "e-commerce-c29b5.firebaseapp.com",
    projectId: "e-commerce-c29b5",
    storageBucket: "e-commerce-c29b5.appspot.com",
    messagingSenderId: "811568928846",
    appId: "1:811568928846:web:a6c8f7c9e6cdf1de05cb1f",
    measurementId: "G-EC6223GXCF"
  };
//initialisation de la base de données
  firebase.initializeApp(config);


  //checker si l'utilisateur existe pour l'insérer sans la base de donnée
  export const createUserProfileDocument = async (authUser, additionalData)=>{
    if(!authUser) return;
    
    const userRef =  firestore.doc(`users/${authUser.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = authUser;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return userRef;
}

//exposer ces variable  ailleur
  export const  auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


  export default firebase;