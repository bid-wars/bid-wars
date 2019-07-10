INSERT INTO users
(email, password, firstname, lastname, role)
VALUES
(${email}, ${password}, ${firstname}, ${lastname}, ${role}, ${company_id})
RETURNING id, email, role, firstname, lastname, company_id;