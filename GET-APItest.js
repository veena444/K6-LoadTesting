import http from 'k6/http'
import {check} from 'k6'

export const options = {
    vus:10,
    iterations:20
}

const params = {
    headers:{
        'Authorization': 'Bearer 7ecd97e654d456f9f95079eece4e82c07b04d24cffc348a0bc73bccd00618b3c'
    }
}

const url = "https://gorest.co.in/public/v2/users/";

export default function(){
    const response = http.get(url, params);

   //status code validation 
  check(response,{
        'status code validation': (response) => response.status == 200
    });
}