import React from "react";
import Papa from "papaparse";
import axios from "axios";

export default function FileUpload({ onPreview, onStart, onResult, onError }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (res) => {
        onPreview && onPreview(res.data);
      },
      error: (err) => {
        console.error("CSV parse error", err);
      }
    });
    // keep file reference on element for upload
    e.target.dataset.file = "ready"; // no-op visual flag
    e.target._file = file;
  };

  const handleUpload = async (e) => {
    const input = document.getElementById("csvInput");
    const file = input && input.files && input.files[0];
    if (!file) { alert("Choose a CSV first."); return; }

    onStart && onStart();

    try {
      const form = new FormData();
      form.append("file", file);

      // NOTE: change URL if your backend uses a different path/port
      const url = "http://127.0.0.1:5000/api/predict"; // recommended: proxy this to your Python backend during dev or set absolute URL

      const resp = await axios.post(url, form, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 120000,
      });

      // expected resp.data shape documented earlier
      onResult && onResult(resp.data);
    } catch (err) {
      console.error("Upload error", err);
      onError && onError(err);
      alert("Error while uploading or processing the file. See console.");
    }
  };

  return (
    <div>
      <input id="csvInput" className="input-file" type="file" accept=".csv" onChange={handleChange} />
      <div style={{marginTop:10}}>
        <button className="btn" onClick={handleUpload}>Upload & Analyze</button>
      </div>
    </div>
  );
}
