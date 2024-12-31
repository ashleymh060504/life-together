INSERT into users (first_name, last_name, username, password, email) 
VALUES ('Ashley', 'Hayes', 'ashleymh060504', 'password', 'ashleymh060504@gmail.com'),
       ('Mathew', 'Lopez', 'duzinhoml', 'password', 'mathewlopez10@gmail.com'),
       ('Javier', 'Lopez', 'javylopez--20', 'password', 'javylopez98@hotmail.com'),
       ('Dalya', 'Kablawi', 'DalyaKablawi', 'password', 'dalyakablawi@gmail.com'),
       ('Martin', 'Rojo', 'Martin-rojo', 'password', 'Martin.rojo27@gmail.com');

INSERT into cleaning (name, description, user_id)
VALUES ('Dishes', 'Load the dishwasher and handwash the rest', NULL),
       ('Laundry', 'Wash, dry, and fold all the laundry', NULL),
       ('Mopping', 'Mop all of the hard floors', NULL),
       ('Vacuuming', 'Vacuum the house', NULL),
       ('Dusting', 'Dust all surfaces', NULL);

INSERT into outdoors (name, description, user_id)
VALUES ('Mow the Lawn', 'Mow the front and back lawn', NULL),
       ('Weed the Garden', 'Pull all the weeds in the garden', NULL),
       ('Trim the Bushes', 'Trim all the bushes in the front and back yard', NULL),
       ('Water the Plants', 'Water all the plants in the garden', NULL),
       ('Rake the Leaves', 'Rake all the leaves in the front and back yard', NULL);

INSERT into meals (name, description, user_id)
VALUES ('Make Dinner', 'Make dinner for the family', NULL),
       ('Clear the Table', 'Clear all the dishes from the table and store leftover food', NULL);
