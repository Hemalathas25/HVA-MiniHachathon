import { useState, useEffect } from "react";

const MyComponent = () => {
    const [data, serData] = useState(null);

}

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=20fb528cb6c64b909523858dc6b2139c');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
})