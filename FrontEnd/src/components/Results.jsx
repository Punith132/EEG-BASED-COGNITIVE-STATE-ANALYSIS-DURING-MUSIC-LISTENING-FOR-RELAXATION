import React from "react";

/* ---------- Confusion Matrix Table ---------- */
function ConfusionMatrixTable({ matrix }) {
  if (!matrix || !matrix.length) return null;

  return (
    <table className="preview-table">
      <thead>
        <tr>
          <th></th>
          {matrix[0].map((_, i) => (
            <th key={i}>Pred {i}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {matrix.map((row, r) => (
          <tr key={r}>
            <th>True {r}</th>
            {row.map((val, c) => (
              <td key={c}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------- Main Results Component ---------- */
export default function Results({ result }) {
  if (!result) {
    return (
      <div className="small">
        No results yet. Upload a CSV and click <b>Upload & Analyze</b>.
      </div>
    );
  }

  const {
    model,                       // RFC / XGBOOST / LSTM
    accuracy,
    classification_report,
    confusion_matrix,
    images
  } = result;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

      {/* ===== Accuracy ===== */}
      <div>
        <h3 style={{ marginBottom: 6 }}>Prediction Accuracy</h3>
        <div style={{ fontSize: 26, fontWeight: 800 }}>
          {typeof accuracy === "number"
            ? (accuracy * 100).toFixed(2) + "%"
            : "Not available"}
        </div>
      </div>

      {/* ===== Classification Report ===== */}
      <div>
        <h3 style={{ marginBottom: 6 }}>Classification Report</h3>

        {classification_report ? (
          <pre
            style={{
              background: "#f8faff",
              padding: 12,
              borderRadius: 8,
              overflowX: "auto",
              fontSize: 13,
              lineHeight: 1.6
            }}
          >
            {classification_report}
          </pre>
        ) : (
          <div className="small">Not available</div>
        )}
      </div>

      {/* ===== Confusion Matrix (Numbers) ===== */}
      <div>
        <h3 style={{ marginBottom: 6 }}>Confusion Matrix (Numbers)</h3>
        <ConfusionMatrixTable matrix={confusion_matrix} />
      </div>

      {/* ===== Confusion Matrix (Image) ===== */}
      <div>
        <h3 style={{ marginBottom: 6 }}>Confusion Matrix (Visualization)</h3>

        {images?.confusion_matrix ? (
          <img
            src={images.confusion_matrix}
            alt="Confusion Matrix"
            style={{
              maxWidth: "420px",
              width: "100%",
              borderRadius: 8,
              border: "1px solid #d5deef"
            }}
          />
        ) : (
          <div className="small">No image provided</div>
        )}
      </div>

    </div>
  );
}
