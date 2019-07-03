INSERT INTO users
(email, password, firstname, lastname, role)
VALUES
(${email}, ${password}, ${firstname}, ${lastname}, ${role})
RETURNING *;