const getUserData = () => {
  const url = `https://randomuser.me/api/?results=1`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let persons = data.results;
      let output = "";
      let contact = "hi";

      //Get user name and photo
      persons.forEach((person) => {
        output = `
    <h2>Recruitment Team Coordinator</h2>
    <h3>${person.name.first} ${person.name.last}</h3>

    <img id="personPic" src="${person.picture.large}" alt="foto perfil">
    <p>
    Hardworking and dedicated Talent Agent with expertise in managing full recruitment life cycle. Able to develop and implement customized strategies and source qualified candidates. 
    Currently leading the recruitment process focused on tech profiles at Wakapi company!                                                                          
    </p>
    <p>    **NOTE: Photo and user info it is fake, is from randomuser.me API**</p>
    `;
      });
      document.getElementById("contHeader").innerHTML = output;

      //Get contact Details
      persons.forEach((data) => {
        contact = `
        <ul>
        <li>Country: ${data.location.country}</li>
        <li>City:${data.location.city} </li>
        <li>${data.email}</li>
        <li>${data.phone}</li>
        </ul>
        `;
      });
      document.getElementById("info").innerHTML = contact;
    });
};

getUserData();

const contContact = document.getElementById('contContact');
let lastKnownScrollPosition = 0;

const doSomething = (scrollPos) => {
  if (scrollPos > contContact.offsetTop) {
    contContact.style.position = 'fixed';
    contContact.style.top = '0';
  } else {
    contContact.style.position = 'static';
  }
};

window.addEventListener('scroll', () => {
  lastKnownScrollPosition = window.scrollY;
  window.requestAnimationFrame(() => {
    doSomething(lastKnownScrollPosition);
  });
});
