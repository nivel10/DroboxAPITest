import 'dotenv/config'

const { APP_DROPBOX_TOKEN, } = process.env;

export const responseGet = () => {
    return {
        isSuccess: true,
        isWarning: false,
        msgType: 0,
        msgText: '',
        result: <any>{},
    };
}

export const settings = Object.freeze({
    dropbox: {
        token: APP_DROPBOX_TOKEN,
    }
});