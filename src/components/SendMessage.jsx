import React, { useState } from 'react'
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";

const InputStyle = {
  width: "78%",
  fontSize: "15px",
  fontWeight: "550",
  marginLeft: "5px",
  marginBottom: "-3px",
}

const SendIconStyle = {
  color: "#7ac2ff",
  marginLeft: "20px"
}

function SendMessage() {
  const [message, setMessage] = useState("");
  function SendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={SendMessage}>
        <div class="sendMsg">
          <Input style={InputStyle} placeholder='メッセージを入力してください' type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
          <SendIcon onClick={SendMessage} style={SendIconStyle}/>
        </div>
      </form>
    </div>
  )
}

export default SendMessage
