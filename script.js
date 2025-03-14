// Array to store blog posts
let posts = [];

// Function to display posts
function displayPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = ''; // Clear existing posts

  posts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <small>Posted on: ${new Date().toLocaleDateString()}</small>
    `;
    postsContainer.appendChild(postElement);
  });
}

// Function to handle form submission
document.getElementById('post-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  // Get form values
  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;

  // Add new post to the array
  posts.push({ title, content });

  // Clear the form
  document.getElementById('post-form').reset();

  // Display updated posts
  displayPosts();
});

// Display initial posts (if any)
displayPosts();