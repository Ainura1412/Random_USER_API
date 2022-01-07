const button = document.querySelector('button');
const profileImg =document.querySelector('.profile-img');
const p = document.querySelector('p');
const header = document.querySelector('h3');
button.addEventListener('click',() => {
fetch('https://randomuser.me/api/?gender=female').then(res => res.json()).then(data => console.log(data.results[0]))
})

