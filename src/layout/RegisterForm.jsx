import axios from 'axios';
import { useState } from 'react';

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fname: '',
    lname:'',
    email: '',
    address:'',
    phone: ''
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      if (input.password !== input.confirmPassword) {
        return alert('Please check confirm password');
      }
      const rs = await axios.post('http://localhost:8008/auth/register', input);
      console.log(rs);
      if (rs.status === 200) {
        alert('Register Successful');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-blue-200">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Register Form</h2>
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
            <label className="block text-sm font-medium text-gray-600">ชื่อ</label>
            <input
              type="fname"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              name="fname"
              value={input.fname}
              onChange={hdlChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">นามสกุล</label>
            <input
              type="lname"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              name="lname"
              value={input.lname}
              onChange={hdlChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              name="email"
              value={input.email}
              onChange={hdlChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">address</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              name="address"
              value={input.address}
              onChange={hdlChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">เบอร์โทรศัพท์</label>
            <input
              type="phone"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              name="phone"
              value={input.phone}
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
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={hdlChange}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="w-1/2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
            <button
              type="reset"
              className="w-1/2 p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
