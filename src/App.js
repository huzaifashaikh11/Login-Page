import { useState } from 'react';
import './App.css';

function App() {

  const FIXED_USERNAME = "huzaifashaikh";
  const FIXED_PASSWORD = "huzaifa123";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === FIXED_USERNAME && password === FIXED_PASSWORD) {
      setMessage(`Welcome ${userName}! Access Granted.`);
      setStatusColor("green");
    } else {
      setMessage("Username ya Password galat hai!");
      setStatusColor("red");
    }
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>Login Portal</h2>

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>

        {/* Username Input */}
        <input
          type='text'
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ padding: '10px', width: '250px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        {/* Password Input */}
        <input
          type='password'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', width: '250px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            width: '272px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>
      </form>

      {/* Result Message */}
      {message && (
        <div style={{ marginTop: '20px', color: statusColor, fontWeight: 'bold' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default App;