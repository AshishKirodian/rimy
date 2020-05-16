import axios from 'axios';
export default class OCRAPI {
    public static scanImage(url: string, file: any) {
        return axios.post(url, file).then(
            result => {
                return result;
            }
        ).catch(error => {
            return error.response;
        })
    }
}