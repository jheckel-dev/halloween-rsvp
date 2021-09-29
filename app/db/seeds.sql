USE party_db;

INSERT INTO guest (name, rsvp) 
VALUES  ("Jalen", TRUE),
        ("Sarah", TRUE),
        ("Alex", TRUE),
        ("Krista", TRUE),
        ("Peter", FALSE);

INSERT INTO song (songid, guest, title, artist)
VALUES (3,"Alex", "Party in the USA", "Miley Cyrus"),
        (2,"Sarah", "Celebrate", "Kool & The Gang");

INSERT INTO snack (snackid, guest, food)
VALUES (4,"Krista", "salsa"),
       (3,"Alex", "soda"),
       (2,"Sarah", "cupcakes");

INSERT INTO costume (costumeid, guest, costume)
VALUES (4,"Krista", "Dinosaur"),
        (1,"Jalen", "Pumpkin"),
        (2,"Sarah", "Pirate"),
        (3,"Alex", "Cat"),
        (5,"Peter", NULL);
