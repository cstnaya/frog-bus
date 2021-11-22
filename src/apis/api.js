import jsSHA from "jssha";
import axios from "axios";

function GetAuthorizationHeader() {
    const AppID  = process.env.REACT_APP_ID;
    const AppKey = process.env.REACT_APP_KEY;

    const GMTString = new Date().toGMTString();
    const ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);

    const HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';

    return {'Authorization': Authorization, 'X-Date': GMTString}; 
}

export default axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/',
    timeout: 1000,
    headers: GetAuthorizationHeader()
});