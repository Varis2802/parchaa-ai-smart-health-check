// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;
// import React, { useState } from 'react';

// function App() {
//   const questions = [
//     {
//         text: 'Do you experience chest pain or discomfort (angina) during physical activity?',
//         options: [
//             { label: 'Frequently', score: 3 },
//             { label: 'Rarely', score: 1 },
//             { label: 'Never', score: 0 }
//         ]
//     },
//     {
//         text: 'How would you describe your physical activity level?',
//         options: [
//             { label: 'Sedentary', score: 3 },
//             { label: 'Lightly active', score: 2 },
//             { label: 'Regularly active', score: 0 }
//         ]
//     },
//     {
//         text: 'Do you smoke or use tobacco products?',
//         options: [
//             { label: 'Yes, regularly', score: 3 },
//             { label: 'Occasionally', score: 2 },
//             { label: 'Never', score: 0 }
//         ]
//     },
//     {
//         text: 'How would you describe your diet?',
//         options: [
//             { label: 'High in saturated fats, sodium, and processed foods', score: 3 },
//             { label: 'Moderately healthy with occasional indulgences', score: 1 },
//             { label: 'Mostly whole foods, low in saturated fats and sodium', score: 0 }
//         ]
//     },
//     {
//         text: 'Is there a history of heart disease in your family?',
//         options: [
//             { label: 'Yes, immediate family member(s)', score: 3 },
//             { label: 'Yes, extended family member(s)', score: 1 },
//             { label: 'No', score: 0 }
//         ]
//     },
//     {
//         text: 'Do you have high blood pressure?',
//         options: [
//             { label: 'Yes, diagnosed and not under control', score: 3 },
//             { label: 'Yes, diagnosed but controlled with medication', score: 1 },
//             { label: 'No or well-controlled', score: 0 }
//         ]
//     },
//     {
//         text: 'How would you describe your stress level?',
//         options: [
//             { label: 'Constantly high', score: 3 },
//             { label: 'Moderate and occasional stress', score: 1 },
//             { label: 'Rarely stressed', score: 0 }
//         ]
//     },
//     {
//         text: 'Do you have diabetes?',
//         options: [
//             { label: 'Yes, and it\'s not controlled', score: 3 },
//             { label: 'Yes, but it\'s controlled', score: 1 },
//             { label: 'No', score: 0 }
//         ]
//     },
//     {
//         text: 'How much alcohol do you consume in a week?',
//         options: [
//             { label: 'More than 14 drinks', score: 3 },
//             { label: 'Between 1-14 drinks', score: 1 },
//             { label: 'None', score: 0 }
//         ]
//     },
//     {
//         text: 'Do you experience shortness of breath with mild activity or at rest?',
//         options: [
//             { label: 'Frequently', score: 3 },
//             { label: 'Rarely', score: 1 },
//             { label: 'Never', score: 0 }
//         ]
//     },
//     {
//         text: 'Have you gained weight rapidly in the past year without any known cause?',
//         options: [
//             { label: 'Yes', score: 2 },
//             { label: 'No', score: 0 }
//         ]
//     },
//     {
//         text: 'How often do you eat fried or fast food?',
//         options: [
//             { label: 'More than 3 times a week', score: 3 },
//             { label: '1-3 times a week', score: 2 },
//             { label: 'Rarely or never', score: 0 }
//         ]
//     },
//     {
//         text: 'Do you get regular check-ups with a healthcare professional?',
//         options: [
//             { label: 'Rarely or never', score: 3 },
//             { label: 'Occasionally', score: 1 },
//             { label: 'At least annually', score: 0 }
//         ]
//     },
//     {
//         text: 'How often do you check your cholesterol levels?',
//         options: [
//             { label: 'Never or unsure', score: 3 },
//             { label: 'Occasionally but not annually', score: 1 },
//             { label: 'Annually', score: 0 }
//         ]
//     },
//     {
//         text: 'Do you experience unexplained dizziness or fainting?',
//         options: [
//             { label: 'Frequently', score: 3 },
//             { label: 'Rarely', score: 1 },
//             { label: 'Never', score: 0 }
//         ]
//     }
// ];

// const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// const [totalScore, setTotalScore] = useState(0);
// const [isComplete, setIsComplete] = useState(false);

// const handleOptionClick = (score) => {
//   setTotalScore(totalScore + score);
//   if (currentQuestionIndex < questions.length - 1) {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   } else {
//     setIsComplete(true);
//   }
// };

// const interpretRisk = () => {
//   if (totalScore <= 10) {
//     return 'Low Risk: Minimal signs of Heart Health disorders.';
//   } else if (totalScore <= 25) {
//     return 'Medium Risk: Some symptoms or factors align with potential risks.';
//   } else {
//     return 'High Risk: Several symptoms or factors indicate a possible high risk.';
//   }
// };

// if (isComplete) {
//   return (
//     <div className="App">
//       <h1>Your Heart Health Risk Interpretation</h1>
//       <p>{interpretRisk()}</p>
//     </div>
//   );
// }

// return (
//   <div className="App">
//     <h1>Heart Health</h1>
//     <p>{questions[currentQuestionIndex].text}</p>
//     {questions[currentQuestionIndex].options.map((option, index) => (
//       <button key={index} onClick={() => handleOptionClick(option.score)}>
//         {option.label} (+{option.score})
//       </button>
//     ))}
//   </div>
// );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HealthCheck from './health_check';
function App() {
    return (
     <BrowserRouter>
        <Routes>
        <Route index path="/" element={<HealthCheck/>}></Route>
        </Routes>
     </BrowserRouter>
    );
  }
  export default App;
