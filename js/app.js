// Select the first element with class 'list-item'
let firstItem = document.querySelector('.list-item');

// Select all elements with class 'list-item'
let listItems = document.querySelectorAll('.list-item');

// Select the element with ID 'main-heading'
let mainHeading = document.getElementById('main-heading');

// Select all elements with class 'text'
let paragraphs = document.getElementsByClassName('text');

// Function that replaces the inner text of elements matching a given selector with 'NOT ENOUGH'
function replaceShortContent(selector) {
let elements = document.querySelectorAll(selector);
for (let i = 0; i < elements.length; i++) {
elements[i].innerText = 'NOT ENOUGH';
}
}

// An array of objects representing profile information
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

// Select the element with ID 'profile-info'
let profileInfoDiv = document.getElementById('profile-info');

// Loop through the profileData array and create a new 'profile' div for each object
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
profileDiv.appendChild(profileBio);

// Add the new 'profile' div to the 'profile-info' element
profileInfoDiv.appendChild(profileDiv);
}