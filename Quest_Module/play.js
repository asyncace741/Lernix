// Get URL query string without '?', example: SCI/2020
const query = window.location.search.substring(1);
const [subjectCode, yearStr] = query.split("/");
const year = parseInt(yearStr, 10);

// Find the paper matching subject and year
const selectedPaper = databaseArray.find(
  paper => paper.subject === subjectCode && paper.year === year
);

if (selectedPaper) {
  let currentIndex = 0;

  function loadQuestion() {
    const questionObj = selectedPaper.question[currentIndex];
    document.getElementById("question").innerHTML = questionObj.text;

    const buttons = document.querySelectorAll("#buttons-container button");
    buttons.forEach((btn, index) => {
      btn.textContent = questionObj.answer[index];
      btn.className = "";
      btn.onclick = () => {
        if (index === questionObj.correct) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
        // Disable all buttons after answer
        buttons.forEach(b => b.disabled = true);
        // Show next button
        document.getElementById("next-btn").style.display = "inline-block";
        };
      btn.disabled = false; // Enable buttons on new question load
    });
  }

  document.getElementById("next-btn").onclick = () => {
    currentIndex++;
    if (currentIndex < selectedPaper.question.length) {
      loadQuestion();
      document.getElementById("next-btn").style.display = "none";
    } else {
      alert("All questions completed!");
      window.open("./library.html", "_parent")
      // Optionally reset quiz or redirect
    }
  };

  // Initial load
  loadQuestion();
  document.getElementById("next-btn").style.display = "none";

} else {
  console.log("Paper not found");
  alert("Requested paper not found!");
}
