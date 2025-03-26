from fastapi import FastAPI
import fastf1

app = FastAPI()

# Enable cache for better performance
fastf1.Cache.enable_cache("cache")  # Ensure the "cache" directory exists

@app.get("/")
def read_root():
    return {"message": "Welcome to TrackSense!"}

@app.get("/f1/session/{year}/{gp}/{session_type}")
def get_session_data(year: int, gp: str, session_type: str):
    try:
        session = fastf1.get_session(year, gp, session_type)
        session.load()  # Load the session data

        return {
            "session_name": session.event['EventName'],
            "session_date": session.event['SessionDate'],
            "track": session.event['Location'],
            "country": session.event['Country'],
        }
    except Exception as e:
        return {"error": str(e)}
