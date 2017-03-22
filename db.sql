-- sudo -i -u postgres
-- CREATE USER prostoandrei WITH PASSWORD 'test';
-- CREATE DATABASE heroes;

DROP TABLE heroes;

CREATE TABLE heroes (
    id integer PRIMARY KEY,
    name character varying,
    level numeric
);

INSERT INTO heroes VALUES (1, 'Wolwerine', 100);
