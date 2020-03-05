import AppSetting from '../configs/dev.config';

const Loger = (message) => {
    if (AppSetting.isDebug) {
        return console.log('message:', message);
    } else {
        return;
    }
};

export default Loger;