document.addEventListener('DOMContentLoaded', function() {
    const stressForm = document.getElementById('stressForm');
    stressForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        const stressQuestions = [];
        for (let i = 1; i <= 15; i++) {
            stressQuestions.push(document.getElementById(`q${i}`).value.toLowerCase());
        }

        let stressCount = 0;

        // Calculate stress count based on answers
        for (let i = 0; i < stressQuestions.length; i++) {
            if (stressQuestions[i] === "yes") {
                stressCount++;
            }
        }

        // Set threshold value
        const threshold = 5;

        // Check stress levels based on threshold
        let resultMessage = "";
        if (stressCount >= threshold) {
            resultMessage = `Hi ${name}, based on your answers, you seem to be stressed. Here are some resources that may help:<br>1. Practice deep breathing exercises.<br>2. Try meditation or mindfulness techniques.<br>3. Exercise regularly to reduce stress.<br>4. Talk to a counselor or therapist for support.`;
        } else {
            resultMessage = `Hi ${name}, based on your answers, you seem to be managing stress well. Keep it up!`;
        }

        // Display result message on the page
        const resultContainer = document.createElement('div');
        resultContainer.innerHTML = `<h2>Stress Assessment Result</h2><p>${resultMessage}</p>`;
        document.body.appendChild(resultContainer);
    });
});
