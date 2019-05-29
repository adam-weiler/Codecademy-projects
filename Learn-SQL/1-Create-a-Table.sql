--Create a table named friends.
CREATE TABLE friends (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
birthday DATE NOT NULL);

--Add Jane Doe and 2 other friends.
INSERT INTO friends (id, name, birthday)
VALUES 
(1, 'Jane Doe', '1990-05-30'),
(2, 'Dr. No', '1945-08-08'),
(3, 'Adam West', '1928-09-19');

--Update Jane's name to Jane Smith.
UPDATE friends
SET name = 'Jane Smith'
WHERE id = 1;

--Add a new column named email.
ALTER TABLE friends
ADD COLUMN email TEXT;

--Update everyone's email addresses.
UPDATE friends
SET email = 'jane@codecademy.com'
WHERE id = 1;

UPDATE friends
SET email = 'bondmustdie@compuserve.net'
WHERE id = 2;

UPDATE friends
SET email = 'thebatusi@brucewayne.com'
WHERE id = 3;

--Remove Jane Smith.
DELETE FROM friends
WHERE id = 1;

--Add a new column named phone.
ALTER TABLE friends
ADD COLUMN phone TEXT;

--Update everyone's email phone numbers.
UPDATE friends
SET phone = '(123) 456-7890'
WHERE id = 2;

UPDATE friends
SET phone = '(098) 765-4321'
WHERE id = 3;

--Add a new column named instagram.
ALTER TABLE friends
ADD COLUMN instagram TEXT NULL;

UPDATE friends
SET instagram = 'https://www.instagram.com/drnoeffects'
WHERE id = 2;

UPDATE friends
SET instagram = 'https://www.instagram.com/batmanadamwestdoble'
WHERE id = 3;

--Add more friends.
INSERT INTO friends (id, name, birthday, email, phone)
VALUES 
(4, 'Mario Luigi', '1942-10-26', 'mario@luigi.com', '123-4567'),
(5, 'Luigi Mario', '1964-07-26', 'luigi@mario.com', '765-4321'),
(6, 'Peach Toadstool', '1970-05-12', 'cakesgalore@toadstool.ts', '123-3210');

--Print all the results.
SELECT *
FROM friends;
