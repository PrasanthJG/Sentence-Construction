// import React from "react";
// import Quiz from "./pages/Quiz";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-900 flex items-center justify-center">
//       <div className="w-full max-w-3xl px-4 py-8 bg-white rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-center text-gray-800 py-6">🧠 </h1>
//         <h1 className="text-4xl font-bold text-center text-gray-800 py-6"> Sentence Construction</h1>
//         <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//           <Quiz />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SentenceConstructionStart from './pages/SentenceConstructionStart';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SentenceConstructionStart />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
