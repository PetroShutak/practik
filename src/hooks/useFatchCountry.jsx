import { useEffect, useState } from "react";
import { fetchCountry } from "service/country-service";
import { useParams } from "react-router-dom";

export const useFatchCountry = () => {
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            try {
                const data = await fetchCountry(id);
                console.log(data)
                setCountry(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            };
        };
        fetchData();
    }, [id]);
    return {
        country, isLoading, error
    };
}

