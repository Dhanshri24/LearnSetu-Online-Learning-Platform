import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Signup', path: '/signup' },
    { name: 'About', path: '/about' },
    // { name: 'Courses', path: '/courses' },
    { name: 'Support', path: 'https://learnsetu.zapier.app', external: true },
    { name: 'Contact', path: 'https://docs.google.com/forms/d/e/1FAIpQLSer1M0MGge7RJ18oOZrCgss5Eht_Sw_9EB-3zUU4Ig8ThI6DA/viewform?usp=header',  external: true },
  ];

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Sidebar */}
      <motion.div
        animate={{ width: collapsed ? 70 : 250 }}
        transition={{ duration: 0.4 }}
        style={{
          backgroundColor: '#0f111a',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: collapsed ? 'center' : 'flex-start',
          padding: collapsed ? '20px 10px' : '20px',
          boxShadow: '2px 0 12px rgba(0,0,0,0.6)',
          zIndex: 2,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            color: '#1ebeff',
            fontWeight: '600',
            fontSize: collapsed ? '18px' : '26px',
            marginBottom: '40px',
            whiteSpace: 'nowrap',
          }}
        >
          {collapsed ? 'LS' : 'LearnSetu'}
        </motion.h2>

        {links.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              margin: '12px 0',
              fontSize: collapsed ? '14px' : '17px',
              transition: '0.3s ease',
              padding: '10px',
              borderRadius: '8px',
              textAlign: collapsed ? 'center' : 'left',
              width: '100%',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#1e2233'}
            onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
          >
            <Link to={link.path} style={{ color: 'inherit', textDecoration: 'none' }}>
              {collapsed ? link.name.charAt(0) : link.name}
            </Link>
          </motion.div>
        ))}

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            marginTop: 'auto',
            backgroundColor: '#1ebeff',
            color: '#0f111a',
            border: 'none',
            padding: '10px',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: '0.3s',
          }}
        >
          {collapsed ? '>' : '< Collapse'}
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          flex: 1,
          backgroundImage: 'url("/assets/do-something-great.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(92%)',
          position: 'relative',
        }}
      >
        {/* Floating Action Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#1ebeff',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#0f111a',
            cursor: 'pointer',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s ease',
          }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MainPage;













// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Main = () => {
//   const navigate = useNavigate();
//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div style={styles.pageContainer}>
//       {/* Sidebar */}
//       {isSidebarVisible && (
//         <div style={styles.sidebar}>
//           <h2 style={styles.logo}>📘 LearnSetu</h2>
//           <button onClick={() => setSidebarVisible(false)} style={styles.toggleBtn}>
//             Close Menu
//           </button>
//           <button onClick={() => handleNavigation('/')} style={styles.menuBtn}>🏠 Home</button>
//           <button onClick={() => handleNavigation('/login')} style={styles.menuBtn}>🔐 Login</button>
//           <button onClick={() => handleNavigation('/signup')} style={styles.menuBtn}>📝 Signup</button>
//           <button onClick={() => handleNavigation('/about')} style={styles.menuBtn}>ℹ️ About</button>
//           <button onClick={() => handleNavigation('/courses')} style={styles.menuBtn}>📚 Courses</button>
//           <button onClick={() => handleNavigation('/support')} style={styles.menuBtn}>💬 Customer Support</button>
//           <button onClick={() => handleNavigation('/contact')} style={styles.menuBtn}>📞 Contact Us</button>
//         </div>
//       )}

//       {/* Show open button if sidebar is hidden */}
//       {!isSidebarVisible && (
//         <div style={styles.openSidebarBtn}>
//           <button onClick={() => setSidebarVisible(true)} style={styles.toggleBtn}>
//             ☰ Open Menu
//           </button>
//         </div>
//       )}

//       {/* Main Content */}
//       <div style={styles.mainContent}>
//         <h1 style={styles.heading}>Welcome to LearnSetu</h1>
//         <p style={styles.subheading}>
//           ‘Setu’ means <strong>bridge</strong>, representing a connection to learning.<br />
//           Empower your future with knowledge. 🌐📖
//         </p>
//       </div>

//       {/* Right side image as background */}
//       <div style={styles.rightImageContainer}></div>
//     </div>
//   );
// };

// const styles = {
//   pageContainer: {
//     display: 'flex',
//     minHeight: '100vh',
//     backgroundImage: 'url(/background.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     color: 'white',
//   },
//   sidebar: {
//     backgroundColor: 'rgba(0, 0, 50, 0.9)',
//     padding: '20px',
//     minWidth: '260px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   openSidebarBtn: {
//     backgroundColor: 'rgba(0, 0, 50, 0.8)',
//     padding: '10px',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logo: {
//     fontWeight: 'bold',
//     fontSize: '1.5rem',  // Further reduced the font size of the logo
//     marginBottom: '10px',
//   },
//   toggleBtn: {
//     backgroundColor: 'transparent',
//     border: '1px solid white',
//     color: 'white',
//     fontSize: '1rem',
//     padding: '10px',
//     cursor: 'pointer',
//     borderRadius: '5px',
//     marginBottom: '10px',
//   },
//   menuBtn: {
//     background: 'transparent',
//     border: 'none',
//     color: 'white',
//     fontSize: '1.1rem',
//     textAlign: 'left',
//     padding: '8px 0',
//     cursor: 'pointer',
//   },
//   mainContent: {
//     flex: 2,
//     padding: '50px 30px',  // Reduced padding for tighter spacing
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     maxWidth: '400px',  // Further reduced width of the main content
//     margin: '0 auto',   // Center the container
//   },
//   heading: {
//     fontSize: '2rem',  // Reduced font size further
//     fontWeight: 'bold',
//     marginBottom: '15px',
//   },
//   subheading: {
//     fontSize: '1.1rem',  // Reduced font size further
//     maxWidth: '350px',   // Further reduced width of the subheading
//     marginBottom: '30px',
//     lineHeight: '1.5',
//   },
//   rightImageContainer: {
//     flex: 1, // Allow right side to take available space
//     backgroundImage: 'url(/assets/l3.png)', // Set the image as the background
//     backgroundSize: 'cover', // Ensure it covers the container properly
//     backgroundPosition: 'center', // Center the image
//     backgroundRepeat: 'no-repeat', // Avoid image repetition
//     minHeight: '100vh', // Full height of the viewport
//     width: '100%', // Full width of the right side
//     overflow: 'hidden', // Prevent image overflow
//     boxSizing: 'border-box', // Make sure padding doesn't affect size
//   },
// };

// export default Main;