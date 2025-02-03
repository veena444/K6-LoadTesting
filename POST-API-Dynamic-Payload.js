import http from 'k6/http'
import {check} from 'k6'
import {randomString} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'

export const options ={
    vus:5,
    duration:'5s'
}

const url = "https://reqres.in/api/users"

const payload = {
    "name": 'AB' + randomString(6),
    "job": "SDET"
}

export default function(){
  const response =  http.post(url,payload);

  console.log("*** printing payload ***", payload);
  console.log("*** printing response ***",response.body);

  check(response,{
    'status code validation': (response) => response.status == 201,
    'Response validation' : (response) => response.body.includes('id')
  })
}