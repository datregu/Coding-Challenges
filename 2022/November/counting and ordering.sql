SELECT race, COUNT(*)
FROM DEMOGRAPHICS
GROUP BY race
ORDER BY  COUNT(*)  DESC