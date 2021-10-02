// attempting to get my register/sign up button to work
const regButt = document.getElementById("regnav");

const regButtHandler = async (event) => {
    event.preventDefault();
    document.location.replace("/signup");
}

regButt.addEventListener("click", regButtHandler);