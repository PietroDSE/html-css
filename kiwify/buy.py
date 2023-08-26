from flask import Flask, render_template, jsonify, request
import stripe

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Defina sua chave secreta

stripe.api_key = 'your_stripe_secret_key'

# Dados fictícios de preços de e-books
ebook_prices = {
    1: 10.00,
    2: 15.00,
    # Adicione mais e-books aqui
}

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/get-ebook-price/<int:ebook_id>', methods=['GET'])
def get_ebook_price(ebook_id):
    price = ebook_prices.get(ebook_id, 0)
    return jsonify({'price': price})

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    data = request.get_json()
    price = data.get('price', 0)
    ebook_id = data.get('ebookId')
    
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price_data': {
                'currency': 'usd',
                'product_data': {
                    'name': f'E-book {ebook_id}',
                },
                'unit_amount': int(price),
            },
            'quantity': 1,
        }],
        mode='payment',
        success_url='http://localhost:5000/success',
        cancel_url='http://localhost:5000/cancel',
    )

    return jsonify({'id': session.id})

if __name__ == '__main__':
    app.run()
