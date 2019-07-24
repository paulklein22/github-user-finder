// Search Input
const searchUser = document.getElementById('searchUser');

// Seacrh Input Event Listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    console.log(userText);
  }
});
