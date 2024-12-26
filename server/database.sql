create TABLE user(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    isActivated BOOLEAN
    activationLink BOOLEAN
);

create TABLE token(
    id SERIAL PRIMARY KEY,
    refreshToken VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES user (id)
);