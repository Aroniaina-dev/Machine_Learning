from flask import Flask, request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
produits = [
    {'nom': 'Produit 1', 'prix': 10},
    {'nom': 'Produit 2', 'prix': 20},
    {'nom': 'Produit 3', 'prix': 30},
]

@app.route('/api/produits')
def get_produits():
    return jsonify(produits)

@app.route('/api/value', methods=['POST'])
def my_api():
    data = request.json
    response = {'result': data}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
    # print ("Test")
