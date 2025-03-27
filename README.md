# TrackSense – Real-Time F1 Telemetry & AI Predictions

TrackSense is a web platform that provides real-time telemetry data, race analytics, and AI-driven predictions for Formula 1 races. Using the FastF1 API, the platform gives fans deep insights into race strategy, driver performance, and predictive analysis based on free practice sessions.

## Features

- **Live Telemetry Data**: Speed, lap times, tire wear, and sector analysis.
- **AI-Powered Race Predictions**: Predict driver performance based on historical and practice session data.
- **Interactive Data Visualizations**: Lap comparisons, tire strategies, and race pace trends.
- **Live Driver Tracking**: View real-time race progress.
- **Historical Performance Analysis**: Track driver and team performance over multiple seasons.

## Tech Stack

- **Frontend**: React.js / Next.js (for interactive UI)
- **Backend**: FastAPI (Python) to serve telemetry and predictions
- **Database**: PostgreSQL for storing race and driver data
- **Machine Learning**: Scikit-learn, TensorFlow/PyTorch for race predictions
- **Data Source**: FastF1 API for real-time F1 data

## Installation

### Prerequisites

- Python 3.8+
- Node.js & npm (for frontend)
- PostgreSQL (or SQLite for local testing)

### Backend Setup

```bash
git clone https://github.com/jacktherizzler/TrackSense.git
cd TrackSense/backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
### Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```
## API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | `/get_race_data` | Fetches real-time telemetry data |
| GET | `/get_driver_performance?driver=VER` | Fetches performance metrics for a driver |
| GET | `/get_tire_strategy?race=Monaco` | Fetches tire strategy insights |
| POST | `/predict_race_outcome` | AI model predicts race results |

## Contributing
1. Fork the repository.
2. Create a new branch (feature-new-component).
3. Commit changes and push to the branch.
4. Create a pull request.

## Acknowledgments
- FastF1 API for telemetry data
