INSERT INTO clients VALUES
(1, 'John', 'Doe', 'john.doe@example.com'),
(2, 'Jane', 'Smith', 'jane.smith@example.com'),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com');

INSERT INTO accounts VALUES
(1, 1, 1000.00),
(2, 1, 5000.00),
(3, 2, 2000.00),
(4, 3, 3000.00);

INSERT INTO transactions VALUES
(1, 1, 'debit', 100.00, 'open'),
(2, 2, 'credit', 200.00, 'processing'),
(3, 3, 'debit', 50.00, 'finalized'),
(4, 4, 'credit', 150.00, 'open');

INSERT INTO transaction_status_changes VALUES
(1, 1, NULL, 'open'),
(2, 1, 'open', 'processing'),
(3, 1, 'processing', 'finalized'),
(4, 2, NULL, 'open'),
(5, 2, 'open', 'processing'),
(6, 3, NULL, 'open'),
(7, 3, 'open', 'finalized'),
(8, 4, NULL, 'open');
