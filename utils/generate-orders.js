/* egg ideas -- should be more personalized? 
a note from jacob / jenny?
a fun memory we shared with them?
a postcard?
a photo? 
a personalized pick? 
*/

/* 

1. on the spreadsheet, fill out the ingredients database
--> make sure there are at least 1 vegetable of each size and each sauciness in the database

then upload that spreadsheet to a table on supabase 

2. run a script to randomly generate orders for each person based on their order
--> for each order in the orders database, go through the order and randomly select a veggie of each size and each sauciness
--> save bowls to a new table on supabase called bowls
--> columns of bowls table: email, veggie_1, veggie_2, veggie_3, bowl_type
--> each veggie is an object: {type: "green_onion", link: "www"}

manually edit the bowls as needed in the database (change links that we think each person would like)

^ we could also do this in real time but that wouldn't allow us to edit the bowls 

3. add the eggs manually, save eggs to egg table

4. display the bowls on /bowls/:email
--> based on the email, retrieve the right bowl from the bowls table and retrieve the egg if exists 
--> display the bowl and egg on the page

5. send email to each person with their customized link 
--> use something like nodemailer or sendgrid

*/
