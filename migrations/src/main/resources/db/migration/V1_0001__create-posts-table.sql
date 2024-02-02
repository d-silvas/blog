CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created DATETIME,
    published DATETIME,
    location VARCHAR(1024) NOT NULL,
    title VARCHAR(512) NOT NULL,
    UNIQUE(title)
);
