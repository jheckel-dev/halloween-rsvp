const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    

    // Serialize data so the template can read it
    // Attendee Name: {{Guest.name}}<br/>
    //     {{!-- first, last? --}}
    //     Song Choice: {{Song.title}} {{Song.artist}}<br/>
    //     Costume: {{Costume.costume}}<br/>
    //     Snack: {{Snack.food}}<br/>

    // Pass serialized data and session flag into template
    res.render('landing', { 
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




router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
