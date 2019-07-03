INSERT INTO companies
(name, logo, website)
VALUES
(${companyName}, ${logo}, ${website})
RETURNING *;