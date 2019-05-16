import { Dimensions } from 'react-native';
import useDeviceOrientation from './Helpers/device-orientation';
import { DEVICE_POINTS, DEVICE_TYPES as DT} from './constants';

const { width, height } = Dimensions.get('window');

const checkIosDeviceType = type => {
    if (!DT[type]) {
        console.warn('Type is not defined.');
        return;
    }
    useDeviceOrientation();
    const { _width, _height } = DEVICE_POINTS[type];

    return _width === width && _height === height;
}

export const DEVICE_TYPES = DT;
export default checkIosDeviceType;
