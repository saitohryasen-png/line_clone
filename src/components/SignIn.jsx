import React from 'react'
import { Button } from '@mui/material'
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import './SignIn.css'

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-header">
          <h1>チャットアプリ</h1>
          <p>友達と繋がろう</p>
        </div>
        
        <div className="signin-content">
          <div className="signin-icon">💬</div>
          <h2>ようこそ</h2>
          <p className="signin-subtitle">Googleでログインして始めましょう</p>
          
          <Button 
            onClick={signInWithGoogle}
            className="signin-button"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              background: 'linear-gradient(135deg, #85e14b 0%, #6bc91f 100%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              padding: '12px',
              marginTop: '30px',
              textTransform: 'none',
              borderRadius: '8px',
              '&:hover': {
                background: 'linear-gradient(135deg, #6bc91f 0%, #5ab317 100%)',
                boxShadow: '0 4px 12px rgba(107, 201, 31, 0.4)',
              }
            }}
          >
            Googleでログインする
          </Button>
        </div>
        
        <div className="signin-footer">
          <p>安全で簡単ログイン</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
