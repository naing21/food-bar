// import { useState } from 'react';
// import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';  // Adjust import path if needed
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string>('');
//   const [authing, setAuthing] = useState<boolean>(false);
//   const navigate = useNavigate();

//   // Function for email/password login
//   const signInWithEmail = async () => {
//     setAuthing(true);
//     setError('');
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/');
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred');
//       setAuthing(false);
//     }
//   };

//   // Function for Google login
//   const signInWithGoogle = async () => {
//     setAuthing(true);
//     try {
//       await signInWithPopup(auth, new GoogleAuthProvider());
//       navigate('/');
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred');
//       setAuthing(false);
//     }
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-gray-800">
//       {/* Container for the login form */}
//       <div className="flex flex-col w-full max-w-md p-6 bg-gray-900 rounded-md shadow-md">

//         {/* Header */}
//         <div className="text-center text-white mb-6">
//           <h3 className="text-4xl font-bold mb-2">Login</h3>
//           <p className="text-lg mb-4">Welcome back! Please enter your details.</p>
//         </div>

//         {/* Email & Password Form */}
//         <div className="mb-6">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-full p-3 mb-4 bg-transparent border border-gray-500 text-white rounded-md focus:outline-none focus:border-white"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full p-3 mb-4 bg-transparent border border-gray-500 text-white rounded-md focus:outline-none focus:border-white"
//           />
//         </div>

//         {/* Error message */}
//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//         {/* Email Login Button */}
//         <button
//           onClick={signInWithEmail}
//           disabled={authing}
//           className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ease-in-out disabled:opacity-50"
//         >
//           Log In With Email
//         </button>

//         {/* OR Divider */}
//         <div className="flex items-center my-4">
//           <div className="flex-1 border-t border-gray-500"></div>
//           <p className="px-4 text-gray-500">OR</p>
//           <div className="flex-1 border-t border-gray-500"></div>
//         </div>

//         {/* Google Login Button */}
//         <button
//           onClick={signInWithGoogle}
//           disabled={authing}
//           className="w-full p-3 bg-white text-black rounded-md hover:bg-gray-100 transition duration-200 ease-in-out disabled:opacity-50"
//         >
//           Log In With Google
//         </button>

//         {/* Register link */}
//         <div className="text-center text-gray-400 mt-6">
//           <p>
//             Don't have an account?{' '}
//             <a href="/register" className="text-white font-semibold underline">
//               Register
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
