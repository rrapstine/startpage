import React from "react";

function Greeting() {
  const name = import.meta.env.VITE_FIRSTNAME;
  const hour = new Date().getHours();
  const greeting = `Good ${
    (hour < 12 && "morning") || (hour < 18 && "afternoon") || "evening"
  }, ${name}`;

  return (
    <header className="mb-12 text-2xl font-bold text-white">{greeting}</header>
  );
}

export default Greeting;
