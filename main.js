Moralis.initialize("H6IjEOrv9igJ85A7Njzux6YIXc4RMyWcIevW75cU"); //Application ID from moralis.io
Moralis.serverURL = "https://ba5dyx3n5tph.usemoralis.com:2053/server"; // serverURL from moralis.io

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
  
  
 
