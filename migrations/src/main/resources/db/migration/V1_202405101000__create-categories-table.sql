CREATE TABLE categories (
    name VARCHAR(127) PRIMARY KEY,
    description VARCHAR(1023) NOT NULL
);

INSERT INTO categories (name, description) VALUES
    ('Math', 'Math theory or exercises'),
    ('Programming', 'Programming notes'),
    ('Random', 'Random content');
