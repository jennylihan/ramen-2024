import { data } from 'autoprefixer';
import * as React from 'react';

interface EmailTemplateProps {
  orderName: string;
  email: string;
  id: number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
orderName, email, id
}) => (
  <div>
    <h1>Hi, {orderName}!</h1>
    <p>Your order from Jenny and Jacob's New Year's Ramen Shop is ready! &#127836;</p>
    <p>At Jenny and Jacob's New Year's Ramen Shop, we pride ourselves in using only
        the freshest, most flavorful ingredients to make our ramen. Thanks why we've 
        spent the last week curating the best items we found in 2023 
        to make your ramen. We hope you enjoy it! &#128523;</p>
        <p><a href={"https://ramen.wolfie.dev/bowl?email="+email+"&id="+id}>Collect your order here.</a></p>
  <p>Thanks for participating!</p>
  <p>- Jenny & Jacob</p>
  </div>
);
