<script src="https://js.stripe.com/v3/"></script>

const stripePublicKey = 'your_stripe_public_key';

async function buyEbook(ebookId) {
    const stripe = Stripe(stripePublicKey);
    
    try {
        const response = await fetch(`/get-ebook-price/${ebookId}`);
        const data = await response.json();

        const { price } = data;

        const session = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: price * 100,
                ebookId: ebookId
            })
        });

        const sessionData = await session.json();

        const result = await stripe.redirectToCheckout({
            sessionId: sessionData.id
        });

        if (result.error) {
            console.error(result.error.message);
            alert('Ocorreu um erro ao iniciar o pagamento. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error(error);
        alert('Ocorreu um erro ao iniciar o pagamento. Por favor, tente novamente.');
    }
}
