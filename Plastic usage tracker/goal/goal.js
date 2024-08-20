document.getElementById("goal-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const goalType = document.getElementById("goal-type").value;
    const goalAmount = document.getElementById("goal-amount").value;
    const goalDate = document.getElementById("goal-date").value;

    const message = `Goal Set: ${goalType} of ${goalAmount} kg by ${goalDate}`;
    document.getElementById("goal-message").textContent = message;
});
