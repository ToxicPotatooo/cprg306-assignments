"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Week9Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        {!user ? (
          // Not logged in - show login button
          <>
            <h1>Shopping List App</h1>
            <p>Please sign in to access your shopping list</p>
            <button
              onClick={handleSignIn}
              style={{
                backgroundColor: "#24292e",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          // Logged in - show welcome message, logout button, and link to shopping list
          <>
            <h1>Welcome!</h1>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />
            )}
            <div style={{ marginTop: "20px" }}>
              <Link href="/week-9/shopping-list">
                <button
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginRight: "10px",
                  }}
                >
                  Go to Shopping List
                </button>
              </Link>
              <button
                onClick={handleSignOut}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
