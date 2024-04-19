import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Initialize state variable for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Event handler for toggling dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Set the className based on darkMode state
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Add onClick event to toggle dark mode */}
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
