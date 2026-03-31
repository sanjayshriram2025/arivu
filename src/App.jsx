function App() {
  const tools = [
    {
      icon: "🔍",
      name: "WikiAI Search",
      description: "Search anything on Wikipedia — AI organizes it into beautiful insights with YouTube videos and related articles.",
      link: "https://wikiai-wine.vercel.app",
      status: "live",
      color: "#667eea",
      glow: "rgba(102,126,234,0.15)",
      border: "rgba(102,126,234,0.3)"
    },
    {
      icon: "📝",
      name: "Study Notes Generator",
      description: "Paste any text and AI generates beautiful structured study notes instantly — perfect for students.",
      link: "https://study-notes-inky.vercel.app",
      status: "live",
      color: "#43e97b",
      glow: "rgba(67,233,123,0.15)",
      border: "rgba(67,233,123,0.3)"
    },
    {
      icon: "🏥",
      name: "Health Assistant",
      description: "Get quick information about symptoms, medicines and healthy living tips — in simple language.",
      link: "#",
      status: "coming",
      color: "#f093fb",
      glow: "rgba(240,147,251,0.15)",
      border: "rgba(240,147,251,0.3)"
    },
    {
      icon: "💼",
      name: "Resume Builder",
      description: "Build a professional resume with AI in minutes — completely free, no templates needed.",
      link: "#",
      status: "coming",
      color: "#ffd700",
      glow: "rgba(255,215,0,0.15)",
      border: "rgba(255,215,0,0.3)"
    },
    {
      icon: "🌾",
      name: "Government Scheme Finder",
      description: "Find all government schemes you are eligible for — in your language, instantly.",
      link: "#",
      status: "coming",
      color: "#ff6b6b",
      glow: "rgba(255,107,107,0.15)",
      border: "rgba(255,107,107,0.3)"
    },
    {
      icon: "📰",
      name: "News Summarizer",
      description: "Get today's top news summarized in simple, easy to understand language — stay informed!",
      link: "#",
      status: "coming",
      color: "#43b89c",
      glow: "rgba(67,184,156,0.15)",
      border: "rgba(67,184,156,0.3)"
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050510",
      fontFamily: "'Segoe UI', sans-serif",
      color: "white",
      overflowX: "hidden"
    }}>

      {/* Background glows */}
      <div style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%", zIndex: 0,
        background: "radial-gradient(ellipse at 20% 50%, rgba(102,126,234,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(240,147,251,0.1) 0%, transparent 60%)"
      }} />

      {/* Header */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "44px", height: "44px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "14px", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: "22px",
            boxShadow: "0 4px 20px rgba(102,126,234,0.4)"
          }}>✨</div>
          <div>
            <div style={{
              fontSize: "24px", fontWeight: "800",
              background: "linear-gradient(135deg, #667eea, #f093fb)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>Arivu AI</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>
              அறிவு — Knowledge
            </div>
          </div>
        </div>
        <div style={{
          background: "rgba(102,126,234,0.15)",
          border: "1px solid rgba(102,126,234,0.3)",
          borderRadius: "20px", padding: "6px 16px",
          color: "#a78bfa", fontSize: "12px", fontWeight: "600"
        }}>🆓 Free Forever</div>
      </div>

      {/* Hero */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "80px 20px 60px" }}>
        <div style={{
          display: "inline-block",
          background: "rgba(67,233,123,0.1)",
          border: "1px solid rgba(67,233,123,0.3)",
          borderRadius: "20px", padding: "8px 20px",
          color: "#43e97b", fontSize: "13px",
          fontWeight: "600", marginBottom: "28px"
        }}>
          ✨ Built by a CSE Student from Tamil Nadu
        </div>
        <h1 style={{
          fontSize: "58px", fontWeight: "800",
          lineHeight: 1.1, margin: "0 0 20px"
        }}>
          Free AI Tools<br/>
          <span style={{
            background: "linear-gradient(135deg, #667eea, #f093fb)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>For Everyone</span>
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.5)", fontSize: "18px",
          maxWidth: "520px", margin: "0 auto 12px", lineHeight: 1.7
        }}>
          Powerful AI tools built for students, professionals and everyone — completely free, no login required.
        </p>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "14px", marginBottom: "48px" }}>
          அறிவே வல்லமை — Knowledge is Power
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "48px", justifyContent: "center", marginBottom: "60px" }}>
          {[["6+", "AI Tools"], ["100%", "Free Forever"], ["∞", "Searches"]].map(([num, label], i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "32px", fontWeight: "800",
                background: "linear-gradient(135deg, #667eea, #f093fb)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>{num}</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto", padding: "0 20px 80px" }}>
        <p style={{
          textAlign: "center", fontSize: "13px",
          fontWeight: "600", color: "rgba(255,255,255,0.3)",
          letterSpacing: "2px", textTransform: "uppercase",
          marginBottom: "40px"
        }}>Our Tools</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px"
        }}>
          {tools.map((tool, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px", padding: "28px",
              transition: "all 0.3s", position: "relative",
              overflow: "hidden"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Glow */}
              <div style={{
                position: "absolute", top: "-40px", right: "-40px",
                width: "120px", height: "120px", borderRadius: "50%",
                background: tool.color, opacity: 0.15, filter: "blur(30px)"
              }} />

              {/* Top row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "16px",
                  background: tool.glow, border: "1px solid " + tool.border,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "26px"
                }}>{tool.icon}</div>
                <div style={{
                  background: tool.status === "live" ? "rgba(67,233,123,0.15)" : "rgba(255,255,255,0.05)",
                  border: tool.status === "live" ? "1px solid rgba(67,233,123,0.3)" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px", padding: "4px 12px",
                  color: tool.status === "live" ? "#43e97b" : "rgba(255,255,255,0.3)",
                  fontSize: "11px", fontWeight: "700"
                }}>
                  {tool.status === "live" ? "✅ Live Now" : "🔜 Coming Soon"}
                </div>
              </div>

              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>{tool.name}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
                {tool.description}
              </p>

              {tool.status === "live" ? (
                <button
                  onClick={() => window.open(tool.link, "_blank")}
                  style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    border: "none", borderRadius: "12px",
                    padding: "10px 24px", color: "white",
                    fontWeight: "700", fontSize: "14px", cursor: "pointer"
                  }}
                >Open Tool →</button>
              ) : (
                <button style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px", padding: "10px 24px",
                  color: "rgba(255,255,255,0.25)",
                  fontWeight: "600", fontSize: "14px", cursor: "not-allowed"
                }}>Coming Soon</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "relative", zIndex: 10,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px", textAlign: "center"
      }}>
        <div style={{
          fontSize: "22px", fontWeight: "800",
          background: "linear-gradient(135deg, #667eea, #f093fb)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: "8px"
        }}>Arivu AI</div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", marginBottom: "6px" }}>
          அறிவு — Knowledge for all
        </p>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", marginBottom: "6px" }}>
          Built with ❤️ by Sanjay Shriram 
        </p>
        <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px" }}>
          © 2026 Arivu AI. All tools are free forever.
        </p>
      </div>
    </div>
  );
}

export default App;