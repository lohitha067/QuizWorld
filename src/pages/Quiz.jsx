import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getQuestions from "../hooks/getQuestions";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../features/questionSlice";
import { GrFormNextLink } from "react-icons/gr";
import { AtomSpinner } from "react-epic-spinners";

function Quiz() {
    const { categoryID } = useParams();
    const questions = getQuestions(categoryID);
    const [answer, setAnswer] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const sref = useRef(null);
    const [score, setScore] = useState(0);

    // Saving the questions in redux
    const dispatch = useDispatch();
    useEffect(() => {
        if (questions.length > 0) {
            dispatch(setQuestion(questions));
        }
    }, [questions, dispatch]);

    const [currentQuestion, setCurrentQuestion] = useState(1);

    // Fetching the options
    const [options, setOptions] = useState([]);
    useEffect(() => {
        if (questions.length > 0) {
            const currentQ = questions[currentQuestion - 1];
            if (currentQ) {
                const combinedOptions = [
                    ...currentQ.incorrect_answers,
                    currentQ.correct_answer,
                ];

                const shuffledOptions = combinedOptions.sort(
                    () => Math.random() - 0.5
                );
                setOptions(shuffledOptions);
            }
        }
    }, [currentQuestion, questions]);

    const handleSubmit = () => {
        // Check if answer is submitted and move to next question if the current question is less than 10
        if (isSubmitted && answer && currentQuestion < 10) {
            setCurrentQuestion(currentQuestion + 1);
            setAnswer("");
            setIsSubmitted(false);
            setOptions([]);
            sref.current.scrollIntoView({ behavior: "smooth" });
        } else if (isSubmitted === false && answer) {
            setIsSubmitted(true);
            if (answer === questions[currentQuestion - 1]?.correct_answer) {
                setScore(score + 10);
            }
        }
    };
    if (questions.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <AtomSpinner color="#fff" />
            </div>
        );
    }

    return (
        <div className="sm:mx-28 mx-4 mt-16 pb-10">
            <div className="mx-auto sm:w-[550px] w-full p-8 rounded-3xl shadow-xl shadow-[#462e77] bg-zinc-100 text-black">
                <div className="flex justify-between">
                    <h1 className="text-xl">Question {currentQuestion}/10</h1>
                    <h1 className="text-xl">
                        Score: {score}/{currentQuestion * 10}
                    </h1>
                </div>

                <h1
                    className="text-2xl mt-2"
                    dangerouslySetInnerHTML={{
                        __html: questions[currentQuestion - 1]?.question,
                    }}
                />

                <div className="">
                    {options?.map((option, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="radio"
                                id={`radio-${index}`}
                                name="custom-radio"
                                className="form-radio h-5 w-5"
                                onChange={() => setAnswer(option)}
                                checked={answer === option}
                                disabled={isSubmitted && answer}
                            />
                            <label
                                htmlFor={`radio-${index}`}
                                className="ml-2 cursor-pointer w-full"
                            >
                                <h2
                                    className={`my-2 w-full p-4 rounded-xl shadow-lg transition-all duration-300
                                    ${
                                        isSubmitted &&
                                        option ===
                                            questions[currentQuestion - 1]
                                                ?.correct_answer
                                            ? "bg-green-200 text-green-700 text-xl"
                                            : ""
                                    }
                                    ${
                                        isSubmitted &&
                                        answer === option &&
                                        option !==
                                            questions[currentQuestion - 1]
                                                ?.correct_answer
                                            ? "bg-red-200 text-red-800"
                                            : ""
                                    }
                                    ${
                                        !isSubmitted ||
                                        (!isSubmitted &&
                                            option !==
                                                questions[currentQuestion - 1]
                                                    ?.correct_answer &&
                                            option !== answer)
                                            ? "bg-white"
                                            : ""
                                    }
                                    `}
                                    dangerouslySetInnerHTML={{ __html: option }}
                                />
                            </label>
                        </div>
                    ))}
                </div>
                <button
                    className="p-4 flex justify-center items-center mt-10 text-2xl w-full rounded-full shadow-lg shadow-[#462e77] bg-gradient-to-bl to-[#5534dc] from-[#8367f4] text-white"
                    onClick={() => handleSubmit()}
                    ref={sref}
                >
                    {isSubmitted && answer ? (
                        <>
                            Next <GrFormNextLink className="ml-2" />
                        </>
                    ) : (
                        <>Submit</>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Quiz;
