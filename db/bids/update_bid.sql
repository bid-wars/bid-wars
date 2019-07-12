UPDATE bids
SET status = ${status},
    customer_id = ${customer_id},
    date = ${date},
    items = ${items}
    company_id = ${company_id},
    customer_id = ${customer_id},
    date = ${date},
    exp_date = ${exp_date},
    salesman_id = ${salesman_id},
    items = ${items},
    name = ${name},
    type = ${type},
    discount = ${discount}
WHERE id = ${id};
