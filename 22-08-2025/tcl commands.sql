DROP DATABASE IF EXISTS tcl_demo;
CREATE DATABASE tcl_demo;
USE tcl_demo;

CREATE TABLE accounts (
    acc_id INT PRIMARY KEY,
    acc_name VARCHAR(50),
    balance INT
);


INSERT INTO accounts VALUES (1, 'Alice', 1000), (2, 'Bob', 1500);


SET AUTOCOMMIT = 0;

START TRANSACTION;

INSERT INTO accounts VALUES (3, 'Charlie', 2000);


SAVEPOINT sp1;


UPDATE accounts SET balance = balance - 200 WHERE acc_id = 1;
UPDATE accounts SET balance = balance + 200 WHERE acc_id = 2;


ROLLBACK TO sp1;


COMMIT;

SELECT * FROM accounts;
