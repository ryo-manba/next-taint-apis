CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "user" (name, email, password) VALUES
  ('Alice', 'alice@example.com', 'password123'),
  ('Bob', 'bob@example.com', 'password123'),
  ('Charlie', 'charlie@example.com', 'password123');
