UPDATE bids
SET status = ${status},
    customer_id = ${customer_id},
    date = ${date},
    items = ${items}
WHERE id = ${id};