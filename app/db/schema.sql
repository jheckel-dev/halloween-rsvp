DROP DATABASE IF EXISTS party_db;
CREATE DATABASE party_db;

USE party_db;

CREATE TABLE guest (
    guestid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    rsvp BOOLEAN
);

CREATE TABLE costume (
    costumeid INT AUTO_INCREMENT PRIMARY KEY,
    guest VARCHAR(100),
    costume VARCHAR(100),
    FOREIGN KEY (costumeid)
    REFERENCES guest(guestid)
);

CREATE TABLE song (
    songid INT AUTO_INCREMENT PRIMARY KEY,
    guest VARCHAR(100),
    title VARCHAR(100),
    artist VARCHAR(100),
    FOREIGN KEY (songid)
    REFERENCES guest(guestid)
);

CREATE TABLE snack (
    snackid INT AUTO_INCREMENT PRIMARY KEY,
    guest VARCHAR(100),
    food VARCHAR(100),
    FOREIGN KEY (snackid)
    REFERENCES guest(guestid)
);