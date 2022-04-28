Moralis.initialize("INSERT_APP_ID)"); //Application ID from moralis.io
Moralis.serverURL = "INSERT_SERVER_URL"; // serverURL from moralis.io

async function login() {
  try {
    currentUser = Moralis.User.current(); 
    if(!currentUser){
        currentUser = await Moralis.Web3.authenticate();
    }
  } catch (error) {
      console.log(error);
  }
}
  
  document.getElementById("login_button").onlick = login;
  
  
 
