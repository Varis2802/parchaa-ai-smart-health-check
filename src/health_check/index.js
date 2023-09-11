// import React, { useState } from 'react';
// import './health_check.css'; // Import your custom CSS file

// function HealthCheck() {
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
//     return (
//       <div className="App">
//         <h1>Your Heart Health Risk Interpretation</h1>
//         <p className="result-text">{interpretRisk()}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <h1>Heart Health</h1>
//       <p className="question-text">{questions[currentQuestionIndex].text}</p>
//       {questions[currentQuestionIndex].options.map((option, index) => (
//         <button
//           key={index}
//           onClick={() => handleOptionClick(option.score)}
//           className="option-button"
//         >
//           {option.label}
//           {/* (+{option.score}) */}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default HealthCheck;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./health_check.css"; // Import your custom CSS file
import "font-awesome/css/font-awesome.min.css";
// import HypertensionData from './hypertension.json';
// import Covid19 from './covid-19.json';
// // Import other health check data similarly
//  import DiabetesData from './diabetes.json';
//  import Malaria from './malaria.json';
//  import Thyroid from './thyroid.json';
//  import Asthma from './asthma.json';

function HealthChecksList() {
  const [selectedHealthCheck, setSelectedHealthCheck] = useState(null);
  const [healthChecks, setHealthChecks] = useState([]);

  useEffect(() => {
    // Fetch the names of all health checks
    axios
      .get("http://localhost:1000/disease/names1") // Replace with your actual endpoint
      .then((response) => {
        const fetchedNames = response.data.map((name) => ({
          name: name,
          data: null, // Initially, we don't have the data. We'll fetch it when a health check is selected.
        }));
        setHealthChecks(fetchedNames);
      });
  }, []);

  const fetchHealthCheckData = (healthCheckName) => {
    axios
      .get(`http://localhost:1000/disease/${healthCheckName}`) // Replace with your actual endpoint
      .then((response) => {
        setSelectedHealthCheck(response.data);
        console.log(response.data);
      });
  };

  if (selectedHealthCheck) {
    return (
      <HealthCheck
        data={selectedHealthCheck}
        onBack={() => setSelectedHealthCheck(null)}
      />
    );
  }

  return (
    <div className="App">
      <h1>WelCome To Parchaa Smart AI Health Check</h1>
      <h2>Select a Health Check</h2>
      <div className="button-container">
        {healthChecks.map((check) => (
          <button
            key={check.name}
            onClick={() => fetchHealthCheckData(check.name)}
          >
            {check.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function HealthCheck({ data, onBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = data.question_options[currentQuestionIndex];

  const interpretRisk = () => {
    if (totalScore <= 10) {
      return `Low Risk: Minimal signs of ${data.name} disorders.`;
    } else if (totalScore <= 25) {
      return `Medium Risk: Some symptoms or factors align with potential risks for ${data.name}.`;
    } else {
      return `High Risk: Several symptoms or factors indicate a possible high risk of ${data.name}.`;
    }
  };

  const handleOptionClick = (score) => {
    setTotalScore(totalScore + score);
    console.log(totalScore + score);
    goToNextQuestion();
    if (currentQuestionIndex === data.question_options.length - 1) {
      setIsComplete(true);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < data.question_options.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (isComplete) {
    return (
      <div className="App">
        <div className="button-container-3">
          <h1>Your Health Risk Interpretation for {data.name}</h1>
          <p className="result-text">{interpretRisk()}</p>
          <button className="home" onClick={onBack}>
            Back to Health Checks
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="heading">{data.name}</h1>
      <p className="question-text">{currentQuestion.question}</p>
      <div className="button-container-2">
      {currentQuestion.prev_id && (
          <button className="arrow1" onClick={goToPrevQuestion}>
            <i className="fa fa-arrow-left"></i>
          </button>
        )}
        {currentQuestion.next_id && (
          <button className="arrow2" onClick={goToNextQuestion}>
            <i className="fa fa-arrow-right"></i>
          </button>
        )}
        {Object.values(currentQuestion.options).map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(Object.values(option)[1])} // Adjusted here to get the score
          >
            {Object.values(option)[0]}
          </button>
        ))}
      </div>
      <button className="home" onClick={onBack}>
        Back to Home
      </button>
    </div>
  );
}

export default HealthChecksList;
