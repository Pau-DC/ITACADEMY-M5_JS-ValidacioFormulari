////////// FUNCIONS COMUNES //////////
// TOGGLE IS-VALID / IS-INVALID
const toggleValid = (element, validBool, feedback) => {
    if(validBool){
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
    }else{
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
    }
}

// SHOW / HIDE FEEDBACK
const addFeedback = (element, error) => {
  element.style.display = 'block';
  element.innerHTML = error;
}

const removeFeedback = (element) => {
  element.style.display = 'none';
  element.innerHTML = '';
}

// EMAIL CHECK
const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

////////// SEARCH BOX FORM VALIDATION //////////
const validateSearchForm = (e) => {

  let validation = true;

  // VALIDANT CAMP CERCA
  if(searchInp.value === ''){
    toggleValid(searchInp, false);
    addFeedback(searchFdbk,"No pots deixar aquest camp buit");
    validation = false;
  }else if(searchInp.value.length <3){
    toggleValid(searchInp, false);
    addFeedback(searchFdbk,"La paraula ha de tenir com a mínim   3 caràcters");
    validation = false;
  }else{
    toggleValid(searchInp, true);
    removeFeedback(searchFdbk);
  }

  // EVITEM QUE S'EXECUTI EL SUBMT SI LA VALIDACIÓ FALLA
  if (validation === false) { 
    e.preventDefault();
    e.stopPropagation();
  }
  
}

////////// LOGIN FORM VALIDATION //////////
const validateLoginForm = (e) => {

  let validation = true;

  // VALIDANT CAMP USUARI
  if(loginUsrInp.value === ''){
    toggleValid(loginUsrInp, false);
    addFeedback(loginUsrFdbk,"No pots deixar aquest camp buit");
    validation = false;
  }else if(!emailIsValid(loginUsrInp.value)){
    toggleValid(loginUsrInp, false);
    addFeedback(loginUsrFdbk,"Aquest format d'email no és correcte");
    validation = false; 
  }else{
    toggleValid(loginUsrInp, true);
    removeFeedback(loginUsrFdbk);
  }
  
  // VALIDANT CAMP PASSWORD
  if(loginPassInp.value === ''){
    toggleValid(loginPassInp,false);
    addFeedback(loginPassFdbk,'No pots deixar aquest camp buit');
    validation = false;
  }else{
    toggleValid(loginPassInp, true);
    removeFeedback(loginPassFdbk);

  }

  // EVITEM QUE S'EXECUTI EL SUBMT SI LA VALIDACIÓ FALLA
  if (validation === false) { 
    e.preventDefault();
    e.stopPropagation();
  }
}

////////// SINGUP FORM VALIDATION //////////
const validateSignupForm = (e) => {

  let validation = true;

  // VALIDANT CAMP USUARI
  if(signupUsrInp.value === ''){
    toggleValid(signupUsrInp, false);
    addFeedback(signupUsrFdbk,"No pots deixar aquest camp buit");
    validation = false;
  }else if(!emailIsValid(signupUsrInp.value)){
    toggleValid(signupUsrInp, false);
    addFeedback(signupUsrFdbk,"Aquest format d'email no és correcte");
    validation = false; 
  }else{
    toggleValid(signupUsrInp, true);
    removeFeedback(signupUsrFdbk);
  }
  
  // VALIDANT CAMP PASSWORD
  if(signupPassInp.value === ''){
    toggleValid(signupPassInp,false);
    addFeedback(signupPassFdbk,'No pots deixar aquest camp buit');
    validation = false;
  }else{
    toggleValid(signupPassInp, true);
    removeFeedback(signupPassFdbk);
  }

  // VALIDANT CAMP PASSWORD BIS
  if(signupPassBisInp.value === ''){
    toggleValid(signupPassBisInp,false);
    addFeedback(signupPassBisFdbk,'No pots deixar aquest camp buit');
    validation = false;
  }else if(signupPassInp.value !== signupPassBisInp.value){
    toggleValid(signupPassBisInp,false);
    addFeedback(signupPassBisFdbk,'Cal que les dues contrassenyes coincideixin');
    validation = false;
  }else{
    toggleValid(signupPassBisInp, true);
    removeFeedback(signupPassBisFdbk);
  }
    
  // VALIDANT CAMP PROVINCIA
  if(signupProvInp.value === ''){
    toggleValid(signupProvInp,false);
    addFeedback(signupProvFdbk,'No pots deixar aquest camp buit');
    validation = false;
  }else{
    toggleValid(signupProvInp, true);
    removeFeedback(signupProvFdbk);
  }


  // EVITEM QUE S'EXECUTI EL SUBMT SI LA VALIDACIÓ FALLA
  if (validation === false) { 
    e.preventDefault();
    e.stopPropagation();
  }

}


