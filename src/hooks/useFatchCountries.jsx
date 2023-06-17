import { useEffect, useState } from "react";
import { getCountries } from "service/country-service";

export const useFatchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            try {
                const data = await getCountries();
                console.log(data)
                setCountries(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            };
        };
        fetchData();
    }, []);
    return {
        countries, isLoading, error
    };
}

