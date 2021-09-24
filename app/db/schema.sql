DROP DATABASE IF EXISTS party_db;
CREATE DATABASE party_db;

USE party_db;

CREATE TABLE guest (
    name VARCHAR(100) PRIMARY KEY,
    rsvp BOOLEAN,
    costume VARCHAR(100)
);

CREATE TABLE song (
    title VARCHAR(100),
    artist VARCHAR(100),
    guest VARCHAR(100),
    FOREIGN KEY (guest)
    REFERENCES guest(name)
);

CREATE TABLE snack (
    food VARCHAR(100),
    guest VARCHAR(100),
    FOREIGN KEY (guest)
    REFERENCES guest(name)
);