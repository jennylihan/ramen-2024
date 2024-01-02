import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { EmailTemplate } from '../../components/email-template'
import { Resend } from 'resend';

const supabase = createClientComponentClient()
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    console.log("here")
    try {
        const { data: orderData, error, status } = await supabase
            .from('bowls_email_test')
            .select()
        if (!error) {
            console.log("got data from supabase")
            console.log(orderData.length)
            for (let index = 0; index < orderData.length; index++) {
                const order = orderData[index];
                console.log(order.name, order.email, order.order_id)
                try {
                    const data = await resend.emails.send({
                        from: `Jenny and Jacob's New Year Ramen Shop <order-up@ramen.wolfie.dev>`,
                        to: [order.email],
                        subject: 'Your order is ready!',
                        // react: EmailTemplate({ firstName: order.name}),
                        react: EmailTemplate({ orderName: order.name, email: order.email, id: order.order_id }),
                    });
                    console.log("sent email to: " + order.name)
                } catch (error) {
                    return Response.json({ error });
                }

            }

        }
    return Response.json(data);

    } catch (error) {
        return Response.json({ error });
    }
}