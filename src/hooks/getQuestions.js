import { useEffect, useState } from "react";

function getQuestions(id) {
    const [shuffleled, setShuffleled] = useState([]);
    try {
        useEffect(() => {
            (async () => {
                const response = await fetch(
                    `https://opentdb.com/api.php?amount=50&category=${id}&type=multiple`
                ).then((res) => res.json());
                if (response?.results.length > 0) {
                    setShuffleled(shuffleArray(response.results).slice(0, 10));
                }
            })();
        }, [id]);
    } catch (error) {
        console.error(error);
    }
    return shuffleled;

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}

export default getQuestions;
