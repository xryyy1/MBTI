let answers = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
};

function answer(choice) {
    // Increment the answer count for the chosen personality trait
    answers[choice]++;

    // Move to the next question or show results if it's the last question
    let nextQuestion = document.querySelector(".question");
    if (nextQuestion) {
        nextQuestion.style.display = "none";
        nextQuestion.nextElementSibling.style.display = "block";
    } else {
        showResults();
    }
}

function showResults() {
    // Determine MBTI type from the user's answers
    let type = '';

    // E/I
    type += answers.E > answers.I ? 'E' : 'I';
    // S/N
    type += answers.S > answers.N ? 'S' : 'N';
    // T/F
    type += answers.T > answers.F ? 'T' : 'F';
    // J/P
    type += answers.J > answers.P ? 'J' : 'P';

    document.getElementById("result").innerText = type;
    document.getElementById("result-container").style.display = "block";
}
