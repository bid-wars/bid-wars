UPDATE events
SET name = ${Subject},
    description = ${Description},
    start_date = ${startCorrected},
    end_date = ${endCorrected},
    location = ${Location}
WHERE id = ${Id};