function App() {
  const tools = [
    {
      icon: "🔍",
      name: "WikiAI Search",
      description: "Search anything on Wikipedia — AI organizes it into beautiful insights, videos and related articles.",
      link: "http://localhost:5173",
      status: "live",
      color: "#667eea"
    },
    {
      icon: "📝",
      name: "Study Notes Generator",
      description: "Paste any text and AI generates beautiful structured study notes instantly.",
      link: "#",
      status: "coming",
      color: "#43e97b"
    },
    {
      icon: "🏥",
      name: "Health Assistant",
      description: "Get quick information about symptoms, medicines and healthy living tips.",
      link: "#",
      status: "coming",
      color: "#f093fb"
    },
    {
      icon: "💼",
      name: "Resume Builder",
      description: "Build a professional resume with AI in minutes — completely free.",
      link: "#",
      status: "coming",
      color: "#ffd700"
    },
    {
      icon: "🌾",
      name: "Government Scheme Finder",
      description: "Find all government schemes you are eligible for — in your language.",
      link: "#",
      status: "coming",
      color: "#ff6b6b"
    },
    {
      icon: "📰",
      name: "News Summarizer",
      description: "Get today's top news summarized in simple, easy to understand language.",
      link: "#",
      status: "coming",
      color: "#43b89c"
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      fontFamily: "'Segoe UI', sans-serif",
    }}>

      {/* Header */}
      <div style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "20px 40px",
        display: "flex", alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "40px", height: "40px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "12px", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: "20px"
          }}>✨</div>
          <span style={{
            fontSize: "22px", fontWeight: "800",
            background: "linear-gradient(135deg, #667eea, #f093fb)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>Arivu AI</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
          அறிவு — Knowledge for all
        </span>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "80px 20px 60px" }}>
        <div style={{
          display: "inline-block",
          background: "rgba(102,126,234,0.15)",
          border: "1px solid rgba(102,126,234,0.3)",
          borderRadius: "20px", padding: "6px 20px",
          color: "#a78bfa", fontSize: "13px",
          fontWeight: "600", marginBottom: "24px"
        }}>
          🆓 100% Free · No Login Required
        </div>
        <h1 style={{
          fontSize: "60px", fontWeight: "900", margin: "0 0 20px",
          background: "linear-gradient(135deg, #fff 0%, #a78bfa 50%, #f093fb 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          lineHeight: 1.1
        }}>
          Free AI Tools<br/>For Everyone
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.5)", fontSize: "20px",
          margin: "0 0 16px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto"
        }}>
          Powerful AI tools built for students, professionals and everyone in between.
        </p>
        <p style={{
          color: "rgba(255,255,255,0.3)", fontSize: "15px", margin: 0
        }}>
          Built with ❤️ by Sanjay Shriram — A CSE student from Tamil Nadu
        </p>
      </div>

      {/* Tools Grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px 80px" }}>
        <h2 style={{
          color: "white", fontWeight: "800", fontSize: "28px",
          marginBottom: "32px", textAlign: "center"
        }}>
          🛠️ Our Tools
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px"
        }}>
          {tools.map((tool, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px", padding: "28px",
              transition: "transform 0.2s",
              position: "relative", overflow: "hidden"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              {/* Status badge */}
              <div style={{
                position: "absolute", top: "20px", right: "20px",
                background: tool.status === "live" ? "rgba(67,233,123,0.15)" : "rgba(255,255,255,0.08)",
                border: tool.status === "live" ? "1px solid rgba(67,233,123,0.4)" : "1px solid rgba(255,255,255,0.15)",
                borderRadius: "20px", padding: "4px 12px",
                color: tool.status === "live" ? "#43e97b" : "rgba(255,255,255,0.4)",
                fontSize: "12px", fontWeight: "600"
              }}>
                {tool.status === "live" ? "✅ Live" : "🔜 Coming Soon"}
              </div>

              {/* Icon */}
              <div style={{
                width: "56px", height: "56px",
                background: tool.color + "22",
                border: "1px solid " + tool.color + "44",
                borderRadius: "16px", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "28px", marginBottom: "16px"
              }}>
                {tool.icon}
              </div>

              {/* Content */}
              <h3 style={{ color: "white", fontWeight: "800", fontSize: "20px", marginBottom: "10px" }}>
                {tool.name}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>
                {tool.description}
              </p>

              {/* Button */}
              {tool.status === "live" ? (
                <button
                  onClick={() => window.open(tool.link, "_blank")}
                  style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    border: "none", borderRadius: "12px",
                    padding: "10px 24px", color: "white",
                    fontWeight: "700", fontSize: "14px",
                    cursor: "pointer"
                  }}
                >
                  Open Tool →
                </button>
              ) : (
                <button style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px", padding: "10px 24px",
                  color: "rgba(255,255,255,0.3)",
                  fontWeight: "700", fontSize: "14px",
                  cursor: "not-allowed"
                }}>
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: "rgba(255,255,255,0.03)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "40px", textAlign: "center"
      }}>
        <p style={{
          background: "linear-gradient(135deg, #667eea, #f093fb)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          fontWeight: "800", fontSize: "24px", margin: "0 0 12px"
        }}>Arivu AI</p>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", margin: "0 0 8px" }}>
          அறிவு — Knowledge for all
        </p>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", margin: "0 0 8px" }}>
          Built with ❤️ by Sanjay Shriram — 2nd Year CSE Student, Tamil Nadu
        </p>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px", margin: 0 }}>
          © 2026 Arivu AI. All tools are free forever.
        </p>
      </div>
    </div>
  );
}

export default App;