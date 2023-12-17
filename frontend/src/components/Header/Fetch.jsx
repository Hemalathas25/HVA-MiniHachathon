import { useState, useEffect } from "react";

const MyComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=20fb528cb6c64b909523858dc6b2139c');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);

if (loading) {
    return<p>Loading...</p>;
}

if (error) {
    return<p>Error: {error.message}</p>
}

return (
    <div className="justify-content-center">
        {Array.isArray(data) && (
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                    
                ))}
            </ul>
        )}
    </div>
);
};

export default MyComponent;