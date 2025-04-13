from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder='.')
CORS(app)

# Configure Gemini API
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-pro')

def get_cosmic_response(prompt):
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Error generating response: {str(e)}"

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route('/api/cosmic-data', methods=['GET'])
def get_cosmic_data():
    try:
        # Generate different types of cosmic information
        events_prompt = "Tell me about recent cosmic events in a concise way"
        discoveries_prompt = "Share some recent space discoveries in a concise way"
        facts_prompt = "Share some interesting astronomy facts in a concise way"

        events = get_cosmic_response(events_prompt)
        discoveries = get_cosmic_response(discoveries_prompt)
        facts = get_cosmic_response(facts_prompt)

        return jsonify({
            'events': events,
            'discoveries': discoveries,
            'facts': facts
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/search', methods=['POST'])
def search_cosmic():
    try:
        data = request.get_json()
        query = data.get('query', '')
        
        if not query:
            return jsonify({'error': 'No query provided'}), 400

        # Generate responses for different aspects of the query
        events_prompt = f"Tell me about cosmic events related to {query} in a concise way"
        discoveries_prompt = f"Share space discoveries related to {query} in a concise way"
        facts_prompt = f"Share astronomy facts related to {query} in a concise way"

        events = get_cosmic_response(events_prompt)
        discoveries = get_cosmic_response(discoveries_prompt)
        facts = get_cosmic_response(facts_prompt)

        return jsonify({
            'events': events,
            'discoveries': discoveries,
            'facts': facts
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 