// attempting navbar functional code
const regnav = document.getElementById("regnav");
const loginnav = document.getElementById("loginnav");
const logoutnav = document.getElementById("logoutnav");
const homenav = document.getElementById("homenav");

// const navBarBoo = async (event) => {
//     event.preventDefault();
//     if (event.target.id == loginnav.id) {
//       document.location.replace("/login");
//     } else if (event.target.id == regnav.id) {
//       document.location.replace("/signup")
//     } else {
//       document.location.replace("/");
//     }
//     console.log(event);
// }


loginnav.addEventListener("click", navBarBoo);
logoutnav.addEventListener("click", navBarBoo);
regnav.addEventListener("click", navBarBoo);
homenav.addEventListener("click", navBarBoo);