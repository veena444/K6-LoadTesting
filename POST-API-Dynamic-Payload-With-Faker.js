import http from 'k6/http'
import {check} from 'k6'
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js'

export const options ={
    vus:5,
    duration:'5s'
}

const url = "https://reqres.in/api/users"

const payload = {
  //  "name": faker.name.findName(),
    "name": faker.internet.email(),
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