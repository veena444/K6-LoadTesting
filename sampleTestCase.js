import http from 'k6/http';

//average load test
export const options = {
    vus:10,
    iterations:10
}

export default function(){
    http.get("https://test.k6.io")
}