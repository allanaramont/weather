import {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";

//Utils
import {ErrorGeneric} from "../utils/errorGeneric";

//I18N
import intl from "react-intl-universal";

export const usePosition = () => {
    const dispatch = useDispatch();
    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0
    });

    const onChange = ({coords}:GeolocationPosition) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
    };
    const onError = (error:GeolocationPositionError) => {
        dispatch(ErrorGeneric(error.message))
    };
    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            dispatch(ErrorGeneric(intl.get('locationSupport')))
            return;
        }
        const watcher = geo.watchPosition(onChange, onError);
        return () => geo.clearWatch(watcher);
    }, []);

    return position;
}