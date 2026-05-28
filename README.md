# EEG Based Cognitive State Analysis During Music Listening for Relaxation

This project analyzes **human cognitive states** using **EEG signals** while listening to different types of music.  
Machine Learning and Deep Learning models are used to classify relaxation-related brain states.

---

## Dataset link
https://drive.google.com/file/d/10UkluE48FemwX-q7CC9374sCJXe5DZ5S/view?usp=sharing

---

## Description
Music has a strong influence on human emotions and mental states.  
This project uses **real-time EEG signals** to identify cognitive states such as **Relaxed, Neutral, and Normal** while listening to music.

The EEG signals are:
- Filtered using **Bandpass Butterworth Filter**
- Processed to extract **Power & Statistical Features**
- Classified using **ML and DL models**

---

## Objectives
- Collect real EEG signals during music listening
- Extract meaningful brainwave features
- Classify cognitive states using ML & DL models
- Compare model performance using accuracy and confusion matrix

---

## Cognitive States Considered
- **Alpha Music (Relaxation)**
- **Flute Music (Deep Calmness)**
- **Normal State (No Music)**

---

## System Architecture
1. EEG Data Collection  
2. Signal Preprocessing (Bandpass Filter)  
3. Feature Extraction  
4. Classification (ML/DL Models)  
5. Performance Evaluation  

---

## Technologies Used

### Programming & Frameworks
- Python
- React.js
- Flask / FastAPI

### Libraries
- NumPy
- Pandas
- SciPy
- Scikit-learn
- XGBoost
- TensorFlow / Keras
- Matplotlib

---

## Models Implemented
- **Random Forest Classifier (RFC)**
- **XGBoost**
- **LSTM (Long Short-Term Memory)**

---

## Features Extracted

### Power Features
- Delta Power
- Theta Power
- Alpha Power
- Beta Power
- Gamma Power

### Statistical Features
- Mean
- Variance
- Standard Deviation
- Skewness
- Kurtosis
- Entropy

---

## Evaluation Metrics
- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix

---

## How to Run the Project

### Backend (Python)
```bash
pip install -r requirements.txt
python app.py
```
### Frontend (React)
```bash
npm install
npm start
```
### Run the app
```bash
python app.py
```
Open http://127.0.0.1:5000/predict

### Project Structure
```bash
EEG-Cognitive-State-Analysis/
│
├── backend/
│   ├── preprocessing.py
│   ├── feature_extraction.py
│   ├── models/
│   ├── app.py
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── App.jsx
│
├── dataset/
├── results/
├── README.md
└── requirements.txt
```
