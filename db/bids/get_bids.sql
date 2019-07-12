SELECT bi.*, us.firstname, us.lastname, us.email, ph.number
FROM bids bi
JOIN companies co
ON bi.company_id = co.id
JOIN users us
ON us.company_id = co.id
JOIN phones ph
ON us.id = ph.external_id
WHERE us.id = ${id};