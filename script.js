// Implementasi login sederhana
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home
    } else {
        alert("Invalid username or password.");
    }
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home
    } else {
        alert("Invalid username or password.");
    }
});
// Select necessary DOM elements
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list').querySelector('ul');

// Add event listener for form submission
commentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get the comment text
    const commentText = commentInput.value.trim();

    // Validate input
    if (commentText === '') {
        alert('Please write a comment before submitting.');
        return;
    }

    // Create a new comment element
    const newComment = document.createElement('li');
    newComment.textContent = commentText;

    // Add the new comment to the list
    commentList.appendChild(newComment);

    // Clear the input field
    commentInput.value = '';
});

