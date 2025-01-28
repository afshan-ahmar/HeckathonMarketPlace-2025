"use client"; // Ensure the page uses client-side rendering

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected to 'next/navigation' for Next.js 13+

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize useRouter hook for redirection

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }

    // Clean up inputs to avoid extra spaces
    const cleanedEmail = email.trim();
    const cleanedPassword = password.trim();

    console.log('Cleaned Email:', cleanedEmail);  // Debugging: log the cleaned email
    console.log('Cleaned Password:', cleanedPassword);  // Debugging: log the cleaned password

    // Simulate successful login
    setTimeout(() => {
      // In a real-world scenario, replace this with your actual authentication logic

      // Redirect to home page on successful login
      router.push('/'); // This will navigate to your homepage after successful login
    }, 1000); // Simulate a delay for API call
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-500 text-sm">{error}</div>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>

          <div className="text-sm text-center mt-4">
            <span>Dont have an account?</span>
            <a href="/signup" className="text-indigo-600 hover:text-indigo-700">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;