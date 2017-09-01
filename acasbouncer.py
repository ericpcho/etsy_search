from flask import Flask, request, jsonify
import requests
app = Flask(__name__)

# @app.route("/v2/listings/active")
# @app.route("/v2/listings/<id>/images")
@app.route("/<path:path>")
def petfind(path=None):
	r = requests.get("https://openapi.etsy.com" + request.full_path)
	resp = jsonify(r.json())
	resp.headers.add('Access-Control-Allow-Origin', '*')
	return resp


if __name__ == "__main__":
	import logging
	logging.basicConfig(level=logging.DEBUG)
	app.run(host='0.0.0.0')

  # https://openapi.etsy.com/v2/listings/active

