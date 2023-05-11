from flask import Flask, request,jsonify
from flask_cors import CORS
import jwt
from datetime import datetime, timedelta

app = Flask(__name__)
app.config['SECRET_KEY'] = 'c00a92f94146c6afdab35e70174c3bbc106f5c7d00ea9d892aa9c191f424cfe8'
CORS(app)
produits = [
    {'nom': 'Produit 1', 'prix': 10},
    {'nom': 'Produit 2', 'prix': 20},
    {'nom': 'Produit 3', 'prix': 30},
]

@app.route('/api/produits', methods=['GET'])
def get_produits():
    return jsonify(produits)

@app.route('/api/value', methods=['POST'])
def my_api():
    data = request.json
    response = {'result': data}
    return jsonify(response)

@app.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if username == 'admin@gmail.com' and password == 'password':
        payload = {
            'username': username,
            'exp': datetime.utcnow() + timedelta(minutes=30)
        }
        token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
        return jsonify({
            'isSuccess': True,
            'token': token
        })
    
    return jsonify({
        'isSuccess': False,
        'error': 'Invalid username or password'
    }), 200



if __name__ == '__main__':
    # from waitress import serve
    # serve(app, host="0.0.0.0", port=5000)
    app.run(debug=True)