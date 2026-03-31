"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Import your existing shopping list components from week-8
// Adjust these imports based on your actual file structure
// For example:
// import ShoppingList from "../../../components/ShoppingList";
// import { getItems } from "../../../services/shoppingListService";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    // Optional: Redirect to landing page if not logged in
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  // Don't render the shopping list if user is not logged in
  if (!user) {
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
            textAlign: "center",
          }}
        >
          <h2>Access Denied</h2>
          <p>Please sign in to view your shopping list.</p>
          <Link href="/week-9">
            <button
              style={{
                backgroundColor: "#24292e",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // User is logged in - render the shopping list
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
        }}
      >
        <h1>Shopping List</h1>
        <div>
          <span style={{ marginRight: "15px" }}>
            Logged in as: {user.displayName || user.email}
          </span>
          <Link href="/week-9">
            <button
              style={{
                backgroundColor: "#6c757d",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Your existing shopping list component from week-8 goes here */}
      {/* For example: */}
      {/* <ShoppingList /> */}

      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "4px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <p>Your shopping list content from week-8 goes here...</p>
        {/* Replace this with your actual shopping list implementation */}
      </div>
    </div>
  );
}
