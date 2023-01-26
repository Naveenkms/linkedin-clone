import { useState } from "react";
import "./Login.css";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged  } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
    const [name, setName] = useState("");
    const [profilepic, setProfilepic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const auth = getAuth();
    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
   const user = userCredential.user;
    updateProfile(user, {
        displayName: name, photoURL: profilepic
    })
  }).then(() => {
    onAuthStateChanged(auth, (user) => {
        dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photourl: profilepic
        }))
    })

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    console.log(errorCode);
  });
    };


const loginToApp = (e) => {
   e.preventDefault();
    console.log("called");
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(login({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photourl: user.photoURL
    }))
  })
  .catch((error) => {
  
    const errorMessage = error.message;
    alert(errorMessage);
  });
}
  return (
    <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/437px-LinkedIn_Logo.svg.png" alt="" />

        <form action="">
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" />
            <input value={profilepic} onChange={e => setProfilepic(e.target.value)}type="text" placeholder="Profile picture url"/>
            <input value={email} onChange={e => setEmail(e.target.value)}type="text" placeholder="Email" />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" minLength={6} placeholder="Password" />
            <button onClick={loginToApp} type="submit">Sign In</button>
        </form>

        <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login