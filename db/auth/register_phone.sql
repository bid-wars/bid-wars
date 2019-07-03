INSERT INTO phones
(number, external_id)
VALUES
(${phone}, ${id})
RETURNING *;