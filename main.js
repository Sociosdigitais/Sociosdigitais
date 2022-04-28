Moralis.initialize(""); //Application ID
Moralis.serverURL = ""; // serverURL

async function login() {
  try {
    user = await Moralis.Web3.authenticate(); //Authenticate and add to DB
    console.log(user);
    alert("User logged in")
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("login_button").onlick = login;
