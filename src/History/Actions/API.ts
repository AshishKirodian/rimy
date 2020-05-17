import axios from 'axios';
export default class HistoryAPI {
    public static getHistory(url: string) {
        return axios.get(url).then(
            result => {
                return result;
            }
        ).catch(error => {
            return error.response;
        })
    }
    public static saveRecord(url: string, object: any) {
        return axios.post(url, object).then(
            result => {
                return result;
            }
        ).catch(error => {
            return error.response;
        })
    }
}