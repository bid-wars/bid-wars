UPDATE users
SET firstname = ${firstname},
    lastname = ${lastname},
    email = ${email},
    password = ${hash},
    role = ${role},
    company_id = ${company_id}
WHERE id = ${id};