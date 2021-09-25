DROP DATABASE IF EXISTS party_db;
CREATE DATABASE party_db;

USE party_db;

CREATE TABLE guest (
    name VARCHAR(100) NOT NULL PRIMARY KEY,
    rsvp BOOLEAN
);

CREATE TABLE costume (
    guest VARCHAR(100),
    costume VARCHAR(100),
    FOREIGN KEY (guest)
    REFERENCES guest(name)
);

CREATE TABLE song (
    guest VARCHAR(100),
    title VARCHAR(100),
    artist VARCHAR(100),
    FOREIGN KEY (guest)
    REFERENCES guest(name)
);

CREATE TABLE snack (
    guest VARCHAR(100),
    food VARCHAR(100),
    FOREIGN KEY (guest)
    REFERENCES guest(name)
);