INSERT INTO user (firstName, lastName, email, phone, createdAt, isActive) VALUES
('John', 'Doe', 'john.doe@example.com', '1234567890', NOW(), true),
('Jane', 'Doe', 'jane.doe@example.com', '0987654321', NOW(), true),
('Alice', 'Smith', 'alice.smith@example.com', '1122334455', NOW(), false),
('Bob', 'Johnson', 'bob.johnson@example.com', '5566778899', NOW(), true);

-- Create 'newrelic' user
CREATE USER '_newrelic-user' IDENTIFIED BY '_newrelic-password';

-- Grant replication client privileges
GRANT REPLICATION CLIENT ON *.* TO '_newrelic-user';

-- Grant select privileges
GRANT SELECT ON *.* TO '_newrelic-user';
