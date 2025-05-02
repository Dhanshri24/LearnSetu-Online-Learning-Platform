import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, icon, link }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 180, 255, 0.5)' }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: 'linear-gradient(145deg, #1e2a38, #0f111a)',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '35px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: '300px',
          minHeight: '160px',
          cursor: 'pointer',
          transition: '0.3s',
          margin: '15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: '700' }}>{title}</h3>
          <p style={{ marginTop: '10px', fontSize: '1.5rem', fontWeight: '500', color: '#d1d1d1' }}>{value}</p>
        </div>
        <div style={{ fontSize: '3.5rem' }}>{icon}</div>
      </motion.div>
    </Link>
  );
};

const InstructorDashboard = () => {
  const [courseCount, setCourseCount] = useState(8);
  const [quizCount, setQuizCount] = useState(0);
  const [progress, setProgress] = useState('30%');

  useEffect(() => {
    const instructorId = localStorage.getItem('instructor_id');

    fetch(`/api/instructor/stats/${instructorId}`)
      .then(res => res.json())
      .then(data => {
        setCourseCount(data.courseCount || 8);
        // setQuizCount(data.quizCount || 0);
        setProgress(`${data.progress || 20}%`);
      })
      .catch(err => console.error('Failed to fetch instructor stats:', err));
  }, []);

  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <div style={{ fontSize: '4rem' }}>👩‍🏫</div>
        <h1 style={{
          fontSize: '3.2rem',
          color: '#ffffff',
          fontWeight: '800',
          textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
        }}>
          Welcome, Instructor!
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
          gap: '30px',
        }}
      >
        <DashboardCard title="Courses" value={courseCount} icon="📚" link="/instructor/courses" />
        {/* <DashboardCard title="Quizzes" value={quizCount} icon="📝" link="/instructor/quizzes" /> */}
        <DashboardCard title="Progress" value={progress} icon="📈" link="/instructor/progress" />
      </motion.div>

      <div style={{ marginTop: '40px', width: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default InstructorDashboard;





// import React, { useEffect, useState } from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const DashboardCard = ({ title, value, icon, link }) => {
//   return (
//     <Link to={link} style={{ textDecoration: 'none' }}>
//       <motion.div
//         whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(30, 190, 255, 0.5)' }}
//         whileTap={{ scale: 0.98 }}
//         style={{
//           background: 'linear-gradient(135deg, #0f111a 30%, #1ebeff 100%)',
//           color: '#fff',
//           borderRadius: '20px',
//           padding: '40px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           minWidth: '320px',
//           minHeight: '170px',
//           cursor: 'pointer',
//           transition: '0.3s',
//           margin: '15px',
//         }}
//       >
//         <div>
//           <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: '700' }}>{title}</h3>
//           <p style={{ marginTop: '10px', fontSize: '1.6rem', fontWeight: '500' }}>{value}</p>
//         </div>
//         <div style={{ fontSize: '3.5rem' }}>{icon}</div>
//       </motion.div>
//     </Link>
//   );
// };

// const InstructorDashboard = () => {
//   const [courseCount, setCourseCount] = useState(0);
//   const [quizCount, setQuizCount] = useState(0);
//   const [progress, setProgress] = useState('0%');

//   useEffect(() => {
//     const instructorId = localStorage.getItem('instructor_id');

//     fetch(`/api/instructor/stats/${instructorId}`)
//       .then(res => res.json())
//       .then(data => {
//         setCourseCount(data.courseCount || 0);
//         setQuizCount(data.quizCount || 0);
//         setProgress(`${data.progress || 0}%`);
//       })
//       .catch(err => console.error('Failed to fetch instructor stats:', err));
//   }, []);

//   return (
//     <div style={{
//       fontFamily: 'Poppins, sans-serif',
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
//       padding: '40px 20px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     }}>
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{ textAlign: 'center', marginBottom: '40px' }}
//       >
//         <div style={{ fontSize: '4rem' }}>👩‍🏫</div>
//         <h1 style={{ fontSize: '3rem', color: '#0f111a', fontWeight: '800' }}>Welcome, Instructor!</h1>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           width: '100%',
//           maxWidth: '1200px',
//           gap: '30px',
//         }}
//       >
//         <DashboardCard title="Courses" value={courseCount} icon="📚" link="/instructor/courses" />
//         <DashboardCard title="Quizzes" value={quizCount} icon="📝" link="/instructor/quizzes" />
//         <DashboardCard title="Progress" value={progress} icon="📈" link="/instructor/progress" />
//       </motion.div>
//     </div>
//   );
// };

// export default InstructorDashboard;


