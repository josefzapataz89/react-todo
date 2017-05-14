var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAL98fqRyF8JoNzHizF64g9zXGlom5Ldk4",
    authDomain: "joferzz-todo-app.firebaseapp.com",
    databaseURL: "https://joferzz-todo-app.firebaseio.com",
    projectId: "joferzz-todo-app",
    storageBucket: "joferzz-todo-app.appspot.com",
    messagingSenderId: "567749266979"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

/**
 * Add data
 */
firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Jose',
        age: 27
    }
});

/**
 * Update data
 */

// firebaseRef.update({
//     isRunning: null
// });

// firebaseRef.update({
//     isRunning: false,
//     'app/name': 'Todo Application Update'
// });

// firebaseRef.child('app').update({
//     name: 'Todo'
// }).then( () => {
//     console.log('Update worker!');
// }, (e) => {
//     console.log('Update failed!');
// });

// firebaseRef.update({
//     'app/name': 'fist challenge',
//     'user/name': 'Fernando'
// });

// firebaseRef.child('app').update({ name: '2nd change' });
// firebaseRef.child('user').update({ name: 'React Udemy' });

/**
 * Remove data
 */
// All
// firebaseRef.remove();

// firebaseRef.update({
//     isRunning: null
// });
// firebaseRef.child('user/age').remove();
// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//     version: '2.0.1',
//     name:null
// })

/**
 * Fetching Data
 */
// firebaseRef.once('value').then( (snapshot) => {
//     console.log('Got entire database', snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });

// firebaseRef.child('app').once('value').then( (snapshot) => {
//     console.log('Got entire app child', snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });

/**
 * Update trigger
 */
// var logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };

// turn on the listener
// firebaseRef.on('value', logData);

// turn off the listener
// firebaseRef.off(logData);

// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('User ref changed', snapshot.val());
// });

// firebaseRef.child('user').update({name: 'Mike'});

// firebaseRef.child('app').update({name: 'Something else'});

/**
 * Arrays
 */
// var notesRef = firebaseRef.child('notes');
// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });
// var newNotesRef = notesRef.push({
//     text: 'Walk the dog'
// });
// console.log('Todo id', newNotesRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});
todosRef.push({
    text: 'todo1'
});
todosRef.push({
    text: 'todo2'
});