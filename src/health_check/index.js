import React, { useState } from "react";
import "./health_check.css"; // Import your custom CSS file
import healthData from "./json/hypertension.json"; // Assuming the JSON file is named 'hypertension.json'
import Alopecia from "./json/alopecia.json";
import Gout from "./json/gout.json";
import TineaCruris from "./json/tinea_cruris.json";
import Sciatica from "./json/sciatica.json";
import Hydrocele from "./json/hydrocele.json";
import Heart from "./json/heart_health.json";
import Os from "./json/osteoarthritis_knee.json";
import lowcalcium from "./json/low_calcium.json";
import Pile from "./json/piles.json";
import logo from "./parchaa_logo.png";

function HealthChecksList() {
  const [selectedHealthCheck, setSelectedHealthCheck] = useState(null);
  const healthChecks = [
    { name: "HyperTensionData", data: healthData },
    // Add more health checks as needed
    { name: "Alopecia", data: Alopecia },
    { name: "Gout", data: Gout },
    { name: "TineaCruris", data: TineaCruris },
    { name: "Sciatica", data: Sciatica },
    { name: "Hydrocele", data: Hydrocele },
    { name: "Heart", data: Heart },
    { name: "Osteoarthritis Knee", data: Os },
    { name: "Lowcalcium", data: lowcalcium },
    { name: "Pile", data: Pile },
  ];
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
      <img className="parchaa-logo" src={logo} alt="Parchaa-Cortex-IMG" />
      <h1>WelCome To Parchaa Smart AI Health Check</h1>
      <h2>Select a Health Check</h2>
      <div className="button-container">
        {healthChecks.map((check) => (
          <button
            key={check.name}
            onClick={() => setSelectedHealthCheck(check.data)}
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
  console.log(totalScore);
  const handleOptionClick = (score) => {
    setTotalScore(totalScore + parseInt(score));


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
        <img className="parchaa-logo" src={logo} alt="Parchaa-Cortex-IMG" />
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
      <img className="parchaa-logo" src={logo} alt="Parchaa-Cortex-IMG" />
      <h1 className="heading">{data.name}</h1>
      <h3>Current Score = {totalScore}</h3>
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
        <h2 className="question-text">{currentQuestion.question}</h2>
        {Object.values(currentQuestion.options).map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(Object.values(option)[1])} // Adjusted here to get the score
          >
            {Object.values(option)[0]} (+{option.score})
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

//database------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./health_check.css"; // Import your custom CSS file
// import "font-awesome/css/font-awesome.min.css";
// import logo from "./parchaa_logo.png"
// // import HypertensionData from './hypertension.json';
// // import Covid19 from './covid-19.json';
// // // Import other health check data similarly
// //  import DiabetesData from './diabetes.json';
// //  import Malaria from './malaria.json';
// //  import Thyroid from './thyroid.json';
// //  import Asthma from './asthma.json';

// function HealthChecksList() {
//   const [selectedHealthCheck, setSelectedHealthCheck] = useState(null);
//   const [healthChecks, setHealthChecks] = useState([]);

//   useEffect(() => {
//     // Fetch the names of all health checks
//     axios
//       .get("http://localhost:1000/disease/names1") // Replace with your actual endpoint
//       .then((response) => {
//         const fetchedNames = response.data.map((name) => ({
//           name: name,
//           data: null, // Initially, we don't have the data. We'll fetch it when a health check is selected.
//         }));
//         setHealthChecks(fetchedNames);
//       });
//   }, []);

//   const fetchHealthCheckData = (healthCheckName) => {
//     axios
//       .get(`http://localhost:1000/disease/${healthCheckName}`) // Replace with your actual endpoint
//       .then((response) => {
//         setSelectedHealthCheck(response.data);
//         console.log(response.data);
//       });
//   };

//   if (selectedHealthCheck) {
//     return (
//       <HealthCheck
//         data={selectedHealthCheck}
//         onBack={() => setSelectedHealthCheck(null)}
//       />
//     );
//   }

//   return (
//     <div className="App">
//        <img className="parchaa-logo" src={logo} alt="Parchaa-Cortex-IMG" />
//       <h1>WelCome To Parchaa Smart AI Health Check</h1>
//       <h2>Select a Health Check</h2>
//       <div className="button-container">
//         {healthChecks.map((check) => (
//           <button
//             key={check.name}
//             onClick={() => fetchHealthCheckData(check.name)}
//           >
//             {check.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// function HealthCheck({ data, onBack }) {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [totalScore, setTotalScore] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);

//   const currentQuestion = data.question_options[currentQuestionIndex];

//   const interpretRisk = () => {
//     if (totalScore <= 10) {
//       return `Low Risk: Minimal signs of ${data.name} disorders.`;
//     } else if (totalScore <= 25) {
//       return `Medium Risk: Some symptoms or factors align with potential risks for ${data.name}.`;
//     } else {
//       return `High Risk: Several symptoms or factors indicate a possible high risk of ${data.name}.`;
//     }
//   };

//   const handleOptionClick = (score) => {
//     setTotalScore(totalScore + score);
//     console.log(totalScore + score);
//     goToNextQuestion();
//     if (currentQuestionIndex === data.question_options.length - 1) {
//       setIsComplete(true);
//     }
//   };

//   const goToNextQuestion = () => {
//     if (currentQuestionIndex < data.question_options.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const goToPrevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   if (isComplete) {
//     return (
//       <div className="App">
//         <img className="parchaa-logo" src={logo} alt="Parchaa-Cortex-IMG" />
//         <div className="button-container-3">
//           <h1>Your Health Risk Interpretation for {data.name}</h1>
//           <p className="result-text">{interpretRisk()}</p>
//           <button className="home" onClick={onBack}>
//             Back to Health Checks
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <img className="parchaa-logo" src={logo} alt="Parchaa-Cortex-IMG" />
//       <h1 className="heading">{data.name}</h1>
//       <div className="button-container-2">
//       {currentQuestion.prev_id && (
//           <button className="arrow1" onClick={goToPrevQuestion}>
//             <i className="fa fa-arrow-left"></i>
//           </button>
//         )}
//         {currentQuestion.next_id && (
//           <button className="arrow2" onClick={goToNextQuestion}>
//             <i className="fa fa-arrow-right"></i>
//           </button>
//         )}
//         <h2 className="question-text">{currentQuestion.question}</h2>
//         {Object.values(currentQuestion.options).map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleOptionClick(Object.values(option)[1])} // Adjusted here to get the score
//           >
//             {Object.values(option)[0]}
//           </button>
//         ))}
//       </div>
//       <button className="home" onClick={onBack}>
//         Back to Home
//       </button>
//     </div>
//   );
// }

// export default HealthChecksList;
