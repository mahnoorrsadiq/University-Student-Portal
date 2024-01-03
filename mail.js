  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBdo84ZPIXP7TXwvo283eVZkqu6i1wGSOQ",
    authDomain: "passwordform.firebaseapp.com",
    databaseURL: "https://passwordform-default-rtdb.firebaseio.com",
    projectId: "passwordform",
    storageBucket: "passwordform.appspot.com",
    messagingSenderId: "789853369479",
    appId: "1:789853369479:web:107568e34477ffb9443422"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refer Database
var passwordformDB = firebase.database().ref('passwordform')

document.getElementById('passwordform').addEventListener('submit' , submitForm);

// Function for submit form 
function submitForm(e)
{
  e.preventDefault();

  // Password.html variables name 
  var currentpass = getElementVal('currentpass');
  var newpass = getElementVal('newpass');
  var confirmpass = getElementVal('confirmpass');

  // Calling save form function 
   savepasswords ( currentpass , newpass , confirmpass);

}

// Function for saving to firebase 
const savepasswords = (currentpass , newpass , confirmpass) =>
{
    var newpasswordform = passwordformDB.push();
    newpasswordform.set({
        currentpass : currentpass ,
        newpass : newpass ,
        confirmpass : confirmpass ,

    })

};

const getElementVal = (id) =>
{
  return document.getElementById(id).value;

}