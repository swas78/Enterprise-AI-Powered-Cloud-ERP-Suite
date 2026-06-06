from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from forecaster import DemandForecaster

app = FastAPI(title="Amdox ERP - AI Forecasting Service", version="1.0")
forecaster = DemandForecaster()

class HistoryPoint(BaseModel):
    date: str
    quantity: float

class TrainRequest(BaseModel):
    sku: str
    history: List[HistoryPoint]

class PredictRequest(BaseModel):
    sku: str
    history: List[HistoryPoint]
    horizon_days: Optional[int] = 90

@app.get("/health")
def health_check():
    return {"status": "UP", "service": "FastAPI Forecaster"}

@app.post("/train")
def train_model(payload: TrainRequest):
    try:
        history_data = [{"date": pt.date, "quantity": pt.quantity} for pt in payload.history]
        success = forecaster.train(payload.sku, history_data)
        return {"status": "success", "message": f"Successfully trained forecasting model for SKU: {payload.sku}"}
    except Exception as err:
        raise HTTPException(status_code=500, detail=str(err))

@app.post("/predict")
def predict_demand(payload: PredictRequest):
    try:
        history_data = [{"date": pt.date, "quantity": pt.quantity} for pt in payload.history]
        predictions = forecaster.predict(payload.sku, history_data, payload.horizon_days)
        return {
            "status": "success",
            "sku": payload.sku,
            "horizon_days": payload.horizon_days,
            "predictions": predictions
        }
    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
