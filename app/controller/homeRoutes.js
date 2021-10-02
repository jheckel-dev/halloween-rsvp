const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("landing", { 
    // Get all data and JOIN with user data
    // Serialize data so the template can read it
    // Pass serialized data and session flag into template
    
      // Guest: {
      //   name: "Sarah"
      // },
      // Song: {
      //   title: "title1",
      //   artist: "artist1"
      // }, 
      // Costume: {
      //   costume: "CaptainAmerica",
      // }, 
      // Snack: {
      //   food: "chickenwings"
      // },
      logged_in: false 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});


router.get("/signup", async (req, res) => {
  try {
    res.render("signup", { 
      logged_in: false 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
