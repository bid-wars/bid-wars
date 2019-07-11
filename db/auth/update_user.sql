UPDATE users
SET firstname = ${firstname},
    lastname = ${lastname},
    email = ${email},
    password = ${password},
    role = ${role},
    company_id = ${company_id}
WHERE id = ${id};