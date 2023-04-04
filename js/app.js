let firstItem = document.querySelector('.list-item');
let listItems = document.querySelectorAll('.list-item');
let mainHeading = document.getElementById('main-heading');
let paragraphs = document.getElementsByClassName('text');
function replaceShortContent(selector) {
  let elements = document.querySelectorAll(selector);
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = 'NOT ENOUGH';
  }
}
let profileData = [
  {
    username: 'johndoe',
    bio: 'John doe is a web developer.',
    profile_image_url: ''
  },
  {
    username: 'janedoe',
    bio: 'Jane doe is a web designer.',
    profile_image_url: ''
  }
];

let profileInfoDiv = document.getElementById('profile-info');

for (let i = 0; i < profileData.length; i++) {
  let profileDiv = document.createElement('div');
  profileDiv.classList.add('profile');

  let profileImage = document.createElement('img');
  profileImage.src = profileData[i].profile_image_url;

  let profileName = document.createElement('h2');
  profileName.innerText = profileData[i].username;

  let profileBio = document.createElement('p');
  profileBio.innerText = profileData[i].bio;

  profileDiv.appendChild(profileImage);
  profileDiv.appendChild(profileName);
  profileDiv.appendChild(profileBio); }