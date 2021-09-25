USE party_db;

INSERT INTO guest (name, rsvp) 
VALUES  ("Krista",TRUE),
        ("Jalen",TRUE),
        ("Sarah",TRUE),
        ("Alex",TRUE),
        ("Peter",FALSE);

INSERT INTO song (guest, title, artist)
VALUES ("Alex","Party in the USA","Miley Cyrus"),
        ("Sarah","Celebrate","Kool & The Gang");

INSERT INTO snack (guest,food)
VALUES ("Krista","salsa"),
       ("Alex","soda"),
       ("Sarah","cupcakes",);

INSERT INTO costume (guest, costume)
VALUES ("Krista","Dinosaur"),
        ("Jalen","Pumpkin"),
        ("Sarah","Pirate"),
        ("Alex","Cat"),
        ("Peter",NULL);
