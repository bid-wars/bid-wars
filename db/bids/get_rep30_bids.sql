SELECT count(distinct *)
FROM bids bi
JOIN companies co
ON bi.company_id = co.id
JOIN users us
ON us.company_id = co.id
WHERE us.role = "sales" AND bi.date > ${past} AND bi.status = "closed";