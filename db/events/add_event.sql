INSERT INTO events
(name, description, external_id, start_date, end_date, location)
VALUES
(${Subject}, ${Description}, ${company_id}, ${startCorrected}, ${endCorrected}, ${Location})
RETURNING id;