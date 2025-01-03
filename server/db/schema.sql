DROP DATABASE IF EXISTS life_together;
CREATE DATABASE life_together;

-- \c life_together;


-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   username VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL
-- );


-- CREATE TABLE cleaning (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   description TEXT,
--   user_id INT,
--   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
-- );

-- CREATE TABLE outdoors (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   description TEXT,
--   user_id INT,
--   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
-- );

-- CREATE TABLE meals (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   description TEXT,
--   user_id INT,
--   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
-- );