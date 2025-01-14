import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <h1 className="font-sans" style={styles.heading}>Yuta Yanagisawa</h1>
        <p className="font-mono" style={styles.subheading}>Fullstack Web Developer</p>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #121212, #282828, #383838)",
    color: "#e0e0e0",
    margin: 0,
  },
  innerContainer: {
    width: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as const,
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
