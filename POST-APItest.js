import http from 'k6/http'
import {check} from 'k6'

export const options = {
    vus:10,
    duration:'5s'

}

const url = "https://reqres.in/api/users"

const payload = {
    "name": "Veena",
    "job": "Tester"
}

export default function(){
   const response =  http.post(url,payload)

   console.log("*** printing payload ***", payload)
   console.log("*** printing response ***",response.body)

    check(response,{'status code validation':(response) => response.status == 201,
        'Response ID validation':(response) => response.body.includes('id')
    })

}