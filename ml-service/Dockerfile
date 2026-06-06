# ==================================================
# Stage 1: Install & Compile Python dependencies
# ==================================================
FROM python:3.11-slim AS builder

WORKDIR /usr/src/app

# Install system compiler tools needed to build C-extensions (like Prophet and NumPy)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Create virtual environment to isolate dependencies
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt .

# Install dependencies into virtualenv
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# ==================================================
# Stage 2: Distroless Python production runner
# ==================================================
FROM gcr.io/distroless/python3-debian12:latest

WORKDIR /app

# Copy virtualenv from builder
COPY --from=builder /opt/venv /opt/venv

# Configure Python paths to use the virtualenv packages
ENV PATH="/opt/venv/bin:$PATH"
ENV PYTHONPATH="/opt/venv/lib/python3.11/site-packages"

# Copy microservice application files
COPY . .

# Expose microservice port
EXPOSE 8000

# Execute FastAPI app using native Python module execution (-m uvicorn)
CMD ["-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
