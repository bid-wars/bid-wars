INSERT INTO bids (
    status,
    company_id,
    customer_id,
    date, exp_date,
    salesman_id,
    items,
    name,
    type,
    discount
    )
VALUES (
    ${status},
    ${company_id},
    ${customer_id},
    ${date},
    ${exp_date},
    ${salesman_id},
    ${items},
    ${name},
    ${type},
    ${discount}
    );