# Cosmic Vision

A dynamic cosmic-themed website that provides information about space events, discoveries, and astronomy facts using the Gemini API.

## Features

- Beautiful cosmic-themed UI with animated background
- Real-time search functionality
- Three interactive cards displaying different cosmic information
- Responsive design for all devices
- Integration with Gemini API for intelligent responses
- Event prediction and tracking system

## Setup

1. Clone the repository
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```
5. Open `index.html` in your web browser

## Usage

- The website will automatically load cosmic information when opened
- Use the search bar to ask specific questions about space and astronomy
- The three cards will update with relevant information based on your search
- Each card displays different aspects of cosmic information:
  - Cosmic Events
  - Space Discoveries
  - Astronomy Facts

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Python, Flask
- API: Google Gemini
- Styling: Custom CSS with animations 