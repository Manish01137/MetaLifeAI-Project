// src/App.jsx
import ThreeCoreSection from "./ThreeCore";
import "./App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb", // white / very light background
        color: "#0b0f19",
        padding: "40px 32px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.2fr)",
            gap: "32px",
            alignItems: "center",
          }}
        >
          {/* Left: Hero text + CTAs */}
          <div>
            <h1
              style={{
                fontSize: "2.8rem",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              MetaLife AI: Innovation of digital life starts where boundaries
              end.
            </h1>

            <p
              style={{
                opacity: 0.7,
                marginBottom: "1.5rem",
                maxWidth: "520px",
                fontSize: "0.98rem",
              }}
            >
              A futuristic hub for AI, blockchain and digital identity. This
              hero section combines a clean white layout with a deep, animated
              3D core to mirror the feel of high-end platforms like OVER.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "12px 24px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg, #43e97b 0%, #38f9d7 50%, #40b7ff 100%)",
                  color: "#02030a",
                  boxShadow: "0 10px 35px rgba(15,23,42,0.35)",
                }}
              >
                Start Now
              </button>

              <button
                style={{
                  padding: "12px 24px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontWeight: 500,
                  background: "transparent",
                  border: "1px solid rgba(15,23,42,0.16)",
                  color: "#0b0f19",
                  backdropFilter: "blur(12px)",
                }}
              >
                Join as Investor
              </button>
            </div>
          </div>

          {/* Right: Futuristic 3D core on dark panel */}
          <ThreeCoreSection />
        </div>
      </div>
    </div>
  );
}

export default App;
