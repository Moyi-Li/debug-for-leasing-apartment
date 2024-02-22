import React, { useState } from 'react';

export function MapQuestionList({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false); // Add submitted state
    const [errorMessage, setErrorMessage] = useState('');

    const handleNextClick = () => {
        if (!submitted && selectedAnswer !== null) { // Check if not submitted
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
            setErrorMessage(''); // Reset error message
        } else if (submitted) {
            setErrorMessage('You have already submitted the form. Please start a new session if you want to answer again.');
        } else {
            setErrorMessage('Please select an answer before proceeding to the next question.');
        }
    };

    const handleAnswerSelect = (answerId) => {
        setSelectedAnswer(answerId);
        setErrorMessage(''); // Clear error message when an answer is selected
    };

    const currentQuestion = questions[currentQuestionIndex];

    const handleSubmit = () => {
        // Logic to handle form submission
        console.log('Form submitted! Please check out our best recommendation for you :D');
        setSubmitted(true); // Set submitted to true after submission
    };

    // Debugging console logs
    console.log('currentQuestionIndex:', currentQuestionIndex);
    console.log('selectedAnswer:', selectedAnswer);
    console.log('submitted:', submitted);

    return (
        <div className="flex-cards">
            <div key={currentQuestion.id}>
                <h3>{currentQuestion.question}</h3>
                <form>
                    {currentQuestion.answers.map(answer => (
                        <div key={answer.id}>
                            <input 
                                type="radio" 
                                id={answer.id} 
                                name={currentQuestion.id} 
                                value={answer.value} 
                                checked={selectedAnswer === answer.id}
                                onChange={() => handleAnswerSelect(answer.id)} 
                                disabled={submitted} // Disable radio buttons after submission
                            />
                            <label htmlFor={answer.id}>{answer.value}</label>
                        </div>
                    ))}
                </form>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {currentQuestionIndex < questions.length - 1 ? (
                <button onClick={handleNextClick} disabled={submitted}>Next</button>
            ) : (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
}


//render answer card
// export function MapAnswerCard({apartments}) {
//     // const [topThree, setTopThree] = useState(['Elm Hall', 'Hub U District', 'Lander Hall']);
    
//     // const [quizCompleted, setQuizCompleted] = useState(false); // Track if quiz is completed

//     let filterApartments = apartments.map(apartment => apartment.name);
//     console.log(filterApartments);
    

//     // Function to calculate recommendation based on user's choices
//     // const calculateRecommendation = () => {
//     //     // Logic to calculate recommendation based on user's choices
//     //     // You can use weights assigned to different questions and answers
//     //     // For now, let's just return the default recommendations
//     //     return ['Elm Hall', 'Hub U District', 'Lander Desk'];

//     //     if (currentQuestionIndex === 0){
//     //         if (selectedAnswer === 'q1_on_campus'){

//     //         }
//     //     } else if (){

//     //     }
//     // };

//     return (
//         // <div className="flex-container-text">
//         //     <h1 className="top-heading">Best apartment for YOU! </h1>
//         //     <div className="flex-title">
//         //         <h2 className="result-texts">🔍 Take this survey and we will recommend the best apartment for you!</h2>
//         //         {/* {quizCompleted ? (
//         //             <h2 className="result-texts">✅ Your Choices: {topOne}, {topTwo}, {topThird}!</h2>
//         //         ) : (
//         //             <h2 className="result-texts">✅ Your Choices: Elm Hall, Hub U District, Lander Desk!</h2>
//         //         )} */}
//         //     </div>
//         // </div>
//         <p> hi </p>
//     );
// }

export function MapAnswerCard({apartments}) {
    // Guard clause to handle undefined or null apartments prop
    if (!apartments) {
        console.error("Apartments prop is undefined or null");
        return null; // or you can return a message or fallback component
    }

    let filterApartments = apartments.map(apartment => apartment.name);
    let logs = console.log(filterApartments);

    return (
        <p> hi </p>
    );
}


// render google map
export function InteractiveMap() {
  return (
    <section>
        <h3 className="top-heading">Check our Interactive Map!</h3>
        <div className="overall-google-map">
            <iframe src="https://www.google.com/maps/d/embed?mid=1AgOqubSb79vWu7CgVGSAdM1cSizDUso&amp;ehbc=2E312F" height="600" width="600" title="Dubs Housing Interactive Map" aria-label="Dubs Housing Interactive Map"></iframe>
        </div>
    </section>
  );
}

