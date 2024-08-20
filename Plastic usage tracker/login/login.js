document.getElementById('toggle-form').addEventListener('click', function(event) {
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const toggleText = document.getElementById('toggle-text');
    
    if (formTitle.textContent === 'Login') {
        window.location.href = '../signup/signup.html';
    } else {
        formTitle.textContent = 'Login';
        submitBtn.textContent = 'Login';
        toggleText.innerHTML = 'Dont have an account? <a href="javascript:void(0);" id="toggle-form">Sign Up</a>';
    }
    
    event.preventDefault(); 
});

document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = '../home.html'; 
});