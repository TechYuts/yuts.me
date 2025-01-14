import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 className="font-sans" style={styles.heading}>Yuts</h1>
      <p className="font-mono" style={styles.subheading}>Web Developer</p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as const,
    background: "linear-gradient(135deg, #121212, #282828, #383838)",
    color: "#e0e0e0",
    margin: 0,
  },
  heading: {
    fontSize: "4rem",
    fontWeight: "bold",
    margin: 0,
    color: "#ffffff",
  },
  subheading: {
    fontSize: "1.5rem",
    marginTop: "10px",
    color: "#b3b3b3",
  },
};

export default IndexPage;
