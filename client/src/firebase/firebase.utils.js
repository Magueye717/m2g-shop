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

//recuperer les données depuis le fichier data.js via redux et l'inserer sur firebase
export const addCollectionAndDocument = async (collectionName, objectToAdd)=>{
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    //const newDocRef = firestore.doc(obj.title);
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

 return await batch.commit();
}

//recuperer les collection et et les transformer
export const convertedtCollectionSnapshotToMap= collections =>{
  const transformedCollection = collections.docs.map(doc=>{
    const {title, items} = doc.data()
    return {
      'RouteName':encodeURI(title.toLowerCase()),
      'id':doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{});
}

export const getCurrentUser =()=>{
  return new Promise((resolve, reject)=>{
    const unsubscrib =auth.onAuthStateChanged(userAuth=>{
      unsubscrib();
     resolve(userAuth);

    }, reject)
  })
}

//exposer ces variable  ailleur
  export const  auth = firebase.auth();
  export const firestore = firebase.firestore();

 export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);


  export default firebase;