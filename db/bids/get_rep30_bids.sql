SELECT us.firstname, count(*) as bidsclosed
FROM bids bi
JOIN companies co
ON bi.company_id = co.id
JOIN users us
ON us.company_id = co.id
WHERE (
    us.id = bi.salesman_id AND 
    us.role = 'sales' AND 
    bi.date >= ${past} AND 
    bi.status = 'closed' AND 
    co.id = ${company_id})
GROUP BY us.firstname;