import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

import FileUpload from "./components/FileUpload";
import Results from "./components/Results";

/*
  App.jsx - Multi-page React Router v6 setup.
  - Home, About, Results (gallery), Evaluation (your existing upload/result), Contact
  - No changes to FileUpload / Results internals (just pass handlers)
*/

export default function App(){
  const [csvPreview, setCsvPreview] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <header className="site-header">

          <nav className="nav-links">
            <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
            <NavLink to="/results" className={({isActive}) => isActive ? "active" : ""}>Results</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/evaluation" element={
              <Evaluation
                csvPreview={csvPreview}
                setCsvPreview={setCsvPreview}
                predictionResult={predictionResult}
                setPredictionResult={setPredictionResult}
                loading={loading}
                setLoading={setLoading}
              />
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="site-footer">
        <div className="footer-inner">
        © {new Date().getFullYear()} EEG Cognitive State Analysis Project —
        All Rights Reserved.
        </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

/* ---------------- HOME ---------------- */
function Home(){
  return (
    <section className="hero">
      <div>
        <div className="brand">
              <span className="nav-title"><h2>EEG BASED COGNITIVE STATE ANALYSIS DURING MUSIC LISTENING FOR RELAXATION</h2></span>
          
          </div>
    <p>
      EEG based cognitive state analysis during music listening for relaxation means
      studying how the human brain behaves when a person listens to different types of
      relaxing music using EEG signals. EEG records the electrical activity of the brain,
      which helps in identifying whether a person is relaxed, calm, or mentally active.
    </p>
    <p>
      This project focuses on analyzing real-world EEG brain signals to understand the
      effect of music on human cognitive and emotional states. Different types of music
      are used to observe changes in brain activity related to relaxation.
    </p>
    <p>
      EEG data is collected using a real EEG machine placed on the scalp of human subjects.
      The signals recorded reflect actual brain responses and include natural variations
      and noise, making the data realistic and reliable.
    </p>
      <h4>Music Types / Cognitive States</h4>
      <ul>
        <li><b>Binaural Beats (Alpha Music):</b> Used to increase Alpha waves and induce relaxation.</li>
        <li><b>Flute Music:</b> Soft instrumental music used for emotional calmness.</li>
        <li><b>Normal State (No Music):</b> Baseline brain activity without any musical stimulus.</li>
      </ul>

    <h4>Dataset Details</h4>
    <ul>
      <li>EEG data collected from 20 different persons</li>
      <li>20 EEG samples collected for each music type</li>
      <li>Total samples per person: 60 EEG recordings</li>
      <li>Data collected under controlled and real-time conditions</li>
    </ul>

    <h4>Purpose of the Project</h4>
    <p>
      The main purpose of this project is to understand how relaxing music affects the
      human brain and to identify cognitive states related to relaxation. This study can
      help in developing future systems for stress monitoring, music therapy, and
      mental health support.
    </p>
    </div>

<h3></h3>
<div className="team-member-grid">
<h3 className="section-title">Team Members</h3><br></br>
  <div className="team-member">
    <span className="name">Mohammed Suhaan</span>
    <span className="usn">1CG22CS067</span>
  </div>
  <div className="team-member">
    <span className="name">Nandan M S</span>
    <span className="usn">1CG22CS073</span>
  </div>
  <div className="team-member">
    <span className="name">Punith Raju V</span>
    <span className="usn">1CG22CS088</span>
  </div>
  <div className="team-member">
    <span className="name">Yashwanth K</span>
    <span className="usn">1CG22CS125</span>
  </div>
</div>
<h3></h3>

    <div className="info-block-row">

      <div className="info-block">
        <h3 className="section-title mt">Guide by:</h3>
        <p><strong>Dr. Rashmi C R, Ph. D.,</strong></p>
        <p>Assoc. Prof., Dept. of CSE,</p>
        <p>CIT, Gubbi, Tumakuru.</p>
      </div>

      <div className="info-block">
        <h3 className="section-title mt">HOD:</h3>
        <p><strong>Dr. Shantala C P, Ph. D.,</strong></p>
        <p>Prof & Head, Dept. of CSE,</p>
        <p>CIT, Gubbi, Tumakuru.</p>
      </div>
      
    </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section className="section card">
      <div className="about-grid">

        {/* LEFT — EEG Information */}
        <div>
          <h1>EEG Machine</h1>
          <img src="eegmachine.jpg" className="about-image" />

          <h3 style={{marginTop:16}}>About the EEG Machine</h3>
          <p className="small">
            The EEG machine used in this project is a wearable 8-channel Electroencephalography (EEG) 
            system designed to record the brain’s electrical activity in a non-invasive manner. It consists 
            of an EEG cap fitted with eight electrodes, which are positioned on the scalp according 
            to the international 10–20 electrode placement system to ensure accurate signal acquisition. 
            Each electrode captures electrical signals generated by neuronal activity in different regions 
            of the brain. The machine is lightweight and comfortable, allowing subjects to wear it for 
            extended periods without discomfort.<br></br>
            The EEG signals are recorded in real time and transmitted to a data acquisition unit for 
            further processing. Since the system is highly sensitive, it can detect even small changes in 
            brainwave activity caused by external stimuli such as music. In this project, the EEG machine 
            was used to collect real-world brain signals while subjects listened to binaural beats 
            (alpha music), flute music, and remained in a normal resting state. The 8-channel configuration 
            provides sufficient spatial information to analyze variations in Alpha, Theta, and Beta brain waves. 
            This real-time EEG data forms the foundation for understanding cognitive and relaxation states influenced by music.
          </p>

          <h3 style={{marginTop:16}}>Dataset</h3>
          <p className="small">
            This table represents a sample EEG dataset collected during the experiment for cognitive state analysis. 
            Each row corresponds to one EEG recording instance captured at a specific time. The columns Channel_1 to 
            Channel_8 represent the raw EEG signal values obtained from the 8-channel EEG machine, where each channel 
            records brain activity from a different scalp location. These values indicate the electrical potential 
            variations generated by neuronal activity.<br></br>
            The Marker column is used to identify events or triggers during data recording and is set to zero in this 
            sample, indicating continuous recording. The Timestamp column shows the exact time (in milliseconds) at which 
            the EEG data was captured, ensuring precise temporal analysis. The Cognitive_State column provides the class 
            label for the data, such as Bineural beats(Alpha Music), Flute Music, Normal State(No Music). This labeled dataset is essential for 
            training and testing machine learning models to classify cognitive states based on EEG signals.
          </p>

          <h3 style={{marginTop:16}}>About the Project</h3>
          <p className="small">
            Human cognitive state monitoring through brain signals has gained increasing 
            importance in mental health, stress assessment, and relaxation studies. Music is widely 
            recognized as a natural stimulus capable of influencing brain activity and emotional 
            responses. This project focuses on identifying a person’s cognitive state while listening to 
            music using Electroencephalogram (EEG) signals collected from a single individual to 
            obtain real-time brain responses during music-induced relaxation.<br></br>
            The acquired EEG signals were preprocessed using a Bandpass Butterworth filter 
            to eliminate noise and separate brainwave components into standard frequency bands 
            such as Delta, Theta, Alpha, Beta, and Gamma. Feature extraction was performed using 
            Power Spectral Density (PSD) for brainwave band power and statistical measures such as 
            mean, variance, skewness, kurtosis, standard deviation, and entropy to capture essential 
            cognitive characteristics.<br></br>
            Machine Learning models like Random Forest Classifier (RFC) and XGBoost 
            were implemented to classify cognitive states using extracted features. Additionally, a 
            Long Short-Term Memory (LSTM) deep learning model was developed to learn temporal 
            variations in EEG signals and improve prediction performance. The models were 
            evaluated using accuracy, confusion matrix, and classification reports.<br></br>
            The findings reveal that EEG-based analysis can effectively distinguish cognitive 
            states during music listening, with deep learning showing superior performance due to its 
            ability to learn temporal patterns, while machine learning models provided competitive 
            accuracy with higher interpretability. The proposed system can be applied in stress 
            monitoring, music therapy evaluation, personalized relaxation systems, and brain
            computer interface applications, proving the potential of artificial intelligence in cognitive 
            assessment and mental wellness.
          </p>
          <h3 style={{marginTop:16}}>Types of Musics Used</h3>
          <p><b>1. Binaural Beats Music (Alpha)</b></p>
          <audio controls>
            <source src="Alpha_Music.mp3" type="audio/mpeg" />
          </audio>
          <p><b>2. Flute Music</b></p>
          <audio controls>
            <source src="Flute_Sound.mp3" type="audio/mpeg" />
          </audio>
          <p><b>3. Normal State (No Music)</b></p>
        </div>
        <div className="flowchart-section">
          <h3>Project Flowchart</h3>
          <img src="flowchart.png" className="about" />
          <p className="small">
            The diagram represents the complete workflow of the EEG based cognitive state analysis 
            during music listening for relaxation:-<br></br>
            <b>1. EEG Data Collection:</b><br></br>
            The system begins with collecting EEG signals either in real-time or from previously 
            recorded datasets. These raw brainwave signals contain information related to the user’s 
            cognitive and emotional states while listening to different types of music.<br></br>
            <b>2. Preprocessing Using Bandpass Filters:</b><br></br>
            The collected EEG signals are cleaned using bandpass filters to isolate important 
            frequency bands such as Delta, Theta, Alpha, Beta, and Gamma. This step removes 
            noise and keeps only the meaningful brainwave components required for accurate 
            analysis.<br></br>
            <b>3. Feature Extraction:</b><br></br>
            After preprocessing, important features are extracted from the EEG data. The system 
            extracts two types of features: power band features, which capture energy levels in 
            different frequency ranges, and statistical features, which include measures like mean, 
            variance, standard deviation, skewness, kurtosis, and entropy.<br></br>
            <b>4. Cognitive State Classification:</b><br></br>
            The extracted features are given to machine learning models such as Random Forest and 
            XGBoost, as well as deep learning models like LSTM. These models learn patterns in 
            the brainwave data and classify the cognitive state of the user.<br></br>
            <b>5. Cognitive State Prediction Output:</b><br></br>
            Finally, the system predicts the user’s mental state such as Relaxed, Neutral, or High 
            Stress. The module also generates performance evaluation metrics including accuracy, 
            confusion matrix, and classification report to validate the effectiveness of the model. 
          </p>
        </div>
        
    </div>
    </section>
  );
}

/* ---------------- RESULTS PAGE (image uploads + 1-line description) ---------------- */
function ResultsPage() {
  // List of result images (add as many as you want)
  const resultImages = [
    "Bands.png",
    "pf.png",
    "sf.png",
    "bargraph.png",
    "rfc.png",
    "xgboost.png",
    "lstm.png",
    // ... add up to result30.png
  ];

  // One-line captions (optional)
  const captions = [
    "Data Filtered & Featured Extracted also Frequency Wave Bands",
    "Extraction of Power Features",
    "Extraction of Statistical Features",
    "Statistical Features Graph Plots",
    "Classification Report for Random Forest Classifier",
    "Classification Report for XGBoost Model",
    "Classification Report for LSTM Model",
    // ... add 30 captions if needed
  ];

  return (
    <section className="section card">
      <h3>Results Snapshots</h3>

      <div className="gallery-grid">
        {resultImages.map((src, index) => (
          <div key={index} className="gallery-card">
            <img src={src} alt={`result-${index}`} />
            <div className="small">{captions[index] || "EEG visualization"}</div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

/* ---------------- EVALUATION (your original upload + results UI) ---------------- */
function Evaluation({
  csvPreview,
  setCsvPreview,
  predictionResult,
  setPredictionResult,
  loading,
  setLoading
}) {
  return (
    <section className="section evaluation">

      {/* ===== 1. UPLOAD SECTION ===== */}
      <div className="card">
        <h3>Upload EEG dataset in CSV File</h3>

        <FileUpload
          onPreview={(data) => setCsvPreview(data)}
          onStart={() => {
            setLoading(true);
            setPredictionResult(null);
          }}
          onResult={(res) => {
            setPredictionResult(res);
            setLoading(false);
          }}
          onError={() => setLoading(false)}
        />
      </div>

      {/* ===== 2. CSV PREVIEW ===== */}
      <div className="card" style={{ marginTop: 24 }}>
        <h3>CSV Preview</h3>
        <p className="small">First 10 rows of the uploaded EEG dataset</p>

        {csvPreview ? (
          <table className="preview-table">
            <thead>
              <tr>
                {Object.keys(csvPreview[0]).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvPreview.slice(0, 10).map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j}>{String(val)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="small">No file uploaded yet.</p>
        )}
      </div>

      {/* ===== 3. RESULT SECTION ===== */}
      <div className="card" style={{ marginTop: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Prediction Result</h3>
          <span className="small">
            {loading ? "Processing..." : "Idle"}
          </span>
        </div>

        <Results result={predictionResult} />
      </div>

    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [sending,setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      const data = await response.json();
      alert(data.message || data.error);

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
      }

    } catch (err) {
      alert("Failed to send contact details");
      console.error(err);
    }

    setSending(false);
  };

  return (
    <section className="section content-animate">
      <div className="contact-grid">
        <div>
          <h2 style={{marginTop:0}}>Contact</h2>
          <p className="no-animate">
            Name, email and a short description — we will reach out regarding collaborations and deployment.
          </p>
          <ul className="small">
            <li><strong>Email:</strong> nandanms130@gmail.com</li>
            <li><strong>Phone:</strong> +91 7975486794</li>
            <li><strong>Location:</strong> CIT College, Tumkur</li>
          </ul>
        </div>

        <form className="feedback-form" onSubmit={submit}>
          <input
            className="input-file"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            className="input-file"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <textarea
            className="input-file"
            placeholder="Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
            style={{minHeight:120}}
          />

          <div style={{display:"flex", gap:8}}>
            <button className="btn" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>
            <button
              type="button"
              className="btn"
              style={{background:"#6b7280"}}
              onClick={()=>{
                setName("");
                setEmail("");
                setMessage("");
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


/* ---------------- NOT FOUND ---------------- */
function NotFound(){
  return (
    <section className="section card center" style={{textAlign:"center"}}>
      <h2 style={{marginTop:0}}>Page not found</h2>
      <p className="small">Return to <Link to="/">Home</Link></p>
    </section>
  );
}
