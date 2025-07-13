import React, { useState } from "react";

const traits = {
  personality: ["Chill", "Adventurous", "Talkative", "Shy"],
  interests: ["Food", "Art", "Music", "Outdoors", "Tech"],
  vibe: ["First Date", "Anniversary", "Just Friends"],
  budget: ["$", "$$", "$$$"],
  mood: ["Fun", "Romantic", "Casual", "Deep Conversation", "Spontaneous"],
};

const suggestionEngine = ({ personality, interests, vibe, budget, mood }) => {
  if (!personality || !interests || !vibe || !budget || !mood) return null;

  if (personality === "Adventurous" && interests === "Outdoors" && mood === "Fun") {
    return "Try a zipline course or an outdoor climbing gym, followed by tacos.";
  }
  if (personality === "Chill" && interests === "Art" && mood === "Romantic") {
    return "Visit a local art gallery and end the night with wine at a cozy bar.";
  }
  if (interests === "Food" && budget === "$" && mood === "Casual") {
    return "Grab street food and explore a local night market.";
  }

  return "Check out a unique local spot that matches their vibe — maybe a hidden cafe or indie cinema.";
};

function App() {
  const [answers, setAnswers] = useState({});
  const [suggestion, setSuggestion] = useState("");

  const handleSelect = (category, option) => {
    setAnswers({ ...answers, [category]: option });
  };

  const getSuggestion = () => {
    const idea = suggestionEngine(answers);
    setSuggestion(idea || "Please select all options.");
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Plan the Perfect Date</h1>
      {Object.entries(traits).map(([category, options]) => (
        <div key={category} style={{ marginBottom: 20 }}>
          <strong>{category.charAt(0).toUpperCase() + category.slice(1)}</strong>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 5 }}>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(category, option)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: answers[category] === option ? "#0070f3" : "#eee",
                  color: answers[category] === option ? "#fff" : "#000",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button onClick={getSuggestion} style={{ padding: "10px 20px", fontSize: 16 }}>
          Find a Match
        </button>
      </div>
      {suggestion && (
        <div style={{ marginTop: 30, padding: 15, border: "1px solid #ccc", borderRadius: 10 }}>
          <h3>Suggested Idea:</h3>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}

export default App;
