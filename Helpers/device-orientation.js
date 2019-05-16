/**
 * Check this link
 * https://github.com/react-native-hooks/device-orientation/blob/master/src/index.js
 * for this codes.
 */
import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DEVICE_ORIENTATION_TYPES = {
    PORTRAIT: 'PORTRAIT',
    LANDSCAPE: 'LANDSCAPE',
};

const useDeviceOrientation = () => {
    const initialDeviceOrientationType = height >= width ? DEVICE_ORIENTATION_TYPES.PORTRAIT : DEVICE_ORIENTATION_TYPES.LANDSCAPE;
    const [deviceOrientation, setDeviceOrientation] = useState(initialDeviceOrientationType);

    useEffect(() => {
        updateState = () => {
            const { height, width } = Dimensions.get('window');
            height >= width ? setDeviceOrientation(DEVICE_ORIENTATION_TYPES.PORTRAIT) : setDeviceOrientation(DEVICE_ORIENTATION_TYPES.LANDSCAPE);
        }

        updateState();
        Dimensions.addEventListener('change', updateState);

        return () => Dimensions.removeEventListener('change', updateState);
    }, []);

    return deviceOrientation;
}

export default useDeviceOrientation;
