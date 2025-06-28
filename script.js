function getSuggestion() {
  const suggestions = [
    "Revise Data Structures and Algorithms",
    "Explore AI-powered learning tools",
    "Take a short quiz on today's topic",
    "Watch a video explanation of this concept",
    "Practice coding problems on LeetCode",
    "Read a summary of your last lesson",
    "Schedule a 10-minute review session"
  ];

  const randomIndex = Math.floor(Math.random() * suggestions.length);
  document.getElementById("suggestion").innerText = suggestions[randomIndex];
}
