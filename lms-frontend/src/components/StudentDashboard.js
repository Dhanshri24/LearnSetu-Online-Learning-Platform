import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = ({ studentName = 'Student' }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.welcomeTitle}>Welcome, {studentName}! 🚀</h1>
        <p style={styles.subtitle}>(View Courses, Quizzes)</p>

        <div style={styles.buttonGroup}>
          <button onClick={() => navigate('/courses')} style={{ ...styles.button, backgroundColor: '#1ebeff' }}>
            📘 View Courses
          </button>
          <button onClick={() => navigate('/student/take-quiz')} style={{ ...styles.button, backgroundColor: '#b388ff' }}>
            🧠 Take Quizzes
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#0f111a',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '40px',
  },
  card: {
    backgroundColor: '#1a1d2b',
    padding: '60px 50px',  // Bigger padding
    borderRadius: '16px',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6)',
    width: '100%',
    maxWidth: '600px', // Make the card bigger
    textAlign: 'center',
  },
  welcomeTitle: {
    color: '#1ebeff',
    fontSize: '48px', // Even bigger welcome text
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    color: '#a0a0a0',
    fontSize: '18px',
    marginBottom: '40px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  button: {
    padding: '16px',
    borderRadius: '10px',
    border: 'none',
    color: '#0f111a',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.3s',
  },
};

export default StudentDashboard;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './StudentDashboard.css'; // <-- Import the CSS file

// const StudentDashboard = ({ studentName = 'Student' }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-card">
//         <h1 className="dashboard-title">Welcome, {studentName}!</h1>
//         <p className="dashboard-subtitle">(View Courses, Notes, Quizzes)</p>

//         <div className="dashboard-buttons">
//           <button onClick={() => navigate('/courses')} className="dashboard-btn blue">
//             📘 View Courses
//           </button>
//           <button onClick={() => navigate('/notes')} className="dashboard-btn green">
//             📝 View Notes
//           </button>
//           <button onClick={() => navigate('/student/take-quiz')}className="dashboard-btn purple">  🧠 Take Quizzes</button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
