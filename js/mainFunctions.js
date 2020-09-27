////////// MAIN FUNCTIONS //////////
// DEFINICIÓ DE VARIABLES A PARTIR DELS ELEMENTS DEL FORMULARI
const searchForm = document.getElementById('search-form');

const searchInp = document.getElementById('search')
const searchFdbk = document.getElementById('search-feedback');


const loginForm = document.getElementById('login-form');

const loginUsrInp = document.getElementById('login-usuari')
const loginUsrFdbk = document.getElementById('login-usuari-feedback');

const loginPassInp = document.getElementById('login-pass')
const loginPassFdbk = document.getElementById('login-pass-feedback');

const loginBtn = document.getElementById('login-button');

const signupForm = document.getElementById('signup-form');

const signupUsrInp = document.getElementById('signup-usuari')
const signupUsrFdbk = document.getElementById('signup-usuari-feedback');

const signupPassInp = document.getElementById('signup-pass')
const signupPassFdbk = document.getElementById('signup-pass-feedback');

const signupPassBisInp = document.getElementById('signup-passBis')
const signupPassBisFdbk = document.getElementById('signup-passBis-feedback');

const signupProvInp = document.getElementById('signup-provincia')
const signupProvFdbk = document.getElementById('signup-provincia-feedback');

const signupBtn = document.getElementById('signup-button');


// FUNCIONS GENÈRIQUES
const goToLoginScreen = (e) => {
  window.location.href = './login.html';
}

const goToSignupScreen = (e) => {
  window.location.href = './signup.html';
}

const whichPage = () => {
  const url = window.location.href;
  const page = url.slice(url.lastIndexOf('/')+1,url.indexOf('html')-1);
  return page;
}
      
const loginBtnClicked = (e) =>{
  if(whichPage() === 'login'){
    loginForm.addEventListener('submit',validateLoginForm);
  }else{
    goToLoginScreen(e);
  }
}

const signupBtnClicked = (e) =>{
  if(whichPage() === 'signup'){
    signupForm.addEventListener('submit',validateSignupForm);
  }else{
    goToSignupScreen(e);
  }
}

// BUTON EVENT LISTENERS
searchForm.addEventListener('submit',validateSearchForm);
loginBtn.addEventListener('click', loginBtnClicked);
signupBtn.addEventListener('click', signupBtnClicked);