import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setRivews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setRivews(data))
    }, []);

    return reviews;
};

export default useReviews;