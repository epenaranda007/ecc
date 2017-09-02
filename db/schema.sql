DROP DATABASE IF EXISTS ekacodingchallenge1;

CREATE DATABASE ekacodingchallenge1;

USE ekacodingchallenge1;

CREATE TABLE users (
  id SERIAL,
  username VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  firstname VARCHAR,
  lastname VARCHAR,
  telephonenumber VARCHAR,
  streetaddress VARCHAR,
  city VARCHAR,
  state VARCHAR,
  zip VARCHAR
);

-- CREATE TABLE users (id SERIAL, username VARCHAR UNIQUE NOT NULL,password VARCHAR NOT NULL,email VARCHAR NOT NULL,firstname VARCHAR,lastname VARCHAR,telephonenumber VARCHAR,streetaddress VARCHAR,city VARCHAR,state VARCHAR,zip VARCHAR);