INSERT INTO simplebank.clients VALUES
(0, 'Peter', 'Parker', 'neighborhoodfriend@marvel.com', 'active'),
(0, 'John', 'Savage', 'plentyoftime@savage.com', 'active'),
(0, 'Charles', 'Darwin', 's2science@species.com', 'active'),
(0, 'Tony', 'Stark', 'ironman@rich.com', 'inactive');

INSERT INTO simplebank.accounts VALUES
(0, 1001, 1, 1000.0),
(0, 1002, 2, 10.0),
(0, 1003, 2, 700.0),
(0, 1004, 3, 100.0),
(0, 1005, 3, 51000.0),
(0, 1006, 3, 1780.0),
(0, 1007, 4, 1000000.0);

INSERT INTO simplebank.transactions VALUES
(0, 1, 2, 'debit', 'open', CURRENT_TIMESTAMP(6), 10.0),
(0, 1, 2, 'debit', 'processing', CURRENT_TIMESTAMP(6), 10.0);
