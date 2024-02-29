import axios from 'axios';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post('http://localhost:8008/auth/login', input);
      console.log(rs.data.token);
      localStorage.setItem('token', rs.data.token);
      const rs1 = await axios.get('http://localhost:8008/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      console.log(rs1.data);
      setUser(rs1.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 to-blue-200">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome Back!</h2>
        <form className="space-y-4" onSubmit={hdlSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              name="username"
              value={input.username}
              onChange={hdlChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              name="password"
              value={input.password}
              onChange={hdlChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
