/*Given a demographics table in the following format:

** demographics table schema **

id
name
birthday
race
you need to return the same table where all letters are lowercase in the race column.*/

SELECT id, name, birthday, lower(race) as race FROM demographics

/*After LOWER() is used, is needed to add the 'AS' keyword IF you want to rename the 'lowercased' column */