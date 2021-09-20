import {useEffect, useState} from "react";

export function useNavigator() {
    const [matches, setMatches] = useState('en-US');

    useEffect(() => {
        setMatches(navigator.language);
    }, []);

    return matches;
}