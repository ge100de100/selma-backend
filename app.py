from datetime import datetime

@app.route("/health")
def health():
    print(f"Request received at {datetime.now()}")
    return "OK"
