import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCU0JsSyfhDUcc7Fge7hZdJ86NeSbhR_XQ",
    authDomain: "chatbase-50deb.firebaseapp.com",
    projectId: "chatbase-50deb",
    storageBucket: "chatbase-50deb.appspot.com",
    messagingSenderId: "683042440738",
    appId: "1:683042440738:web:2c5648b3022ebf7f69ac7b"
}

const app = firebase.default.initializeApp(config)

const db = app.firestore()
const auth = app.auth()
const phone = firebase.default.auth

const users = db.collection('users')
const chatRoom = db.collection('chatRoom')
const chats = db.collection('chats')

export default {
    db,
    auth,
    users,
    phone,
    chatRoom,
    chats
}
