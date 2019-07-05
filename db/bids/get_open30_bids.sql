SELECT count(*)
FROM bids bi
JOIN companies co
ON bi.company_id = co.id
JOIN users us
ON us.company_id = co.id
WHERE us.id = ${id} AND bi.date = ${past} ANd bi.status = "open";