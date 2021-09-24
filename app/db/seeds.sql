USE party_db;

INSERT INTO guest (name, rsvp, costume) 
VALUES ("Krista",TRUE,"Dinosaur"),
        ("Jalen",TRUE,"Pumpkin"),
        ("Sarah",TRUE,"Pirate"),
        ("Alex",TRUE,"Cat"),
        ("Peter",FALSE,NULL);

INSERT INTO song (title, artist, guest)
VALUES ("Party in the USA","Miley Cyrus","Alex"),
        ("Celebrate","Kool & The Gang","Sarah");

INSERT INTO snack (food,guest)
VALUES ("salsa","Krista"),
       ("soda","Alex"),
       ("cupcakes","Sarah");
