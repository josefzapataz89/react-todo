import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyAL98fqRyF8JoNzHizF64g9zXGlom5Ldk4",
        authDomain: "joferzz-todo-app.firebaseapp.com",
        databaseURL: "https://joferzz-todo-app.firebaseio.com",
        projectId: "joferzz-todo-app",
        storageBucket: "joferzz-todo-app.appspot.com",
        messagingSenderId: "567749266979"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;