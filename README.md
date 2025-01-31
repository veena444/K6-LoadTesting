K6 is a reliability tesingt tool. It helps to simulate realiastic user behavior & test how the system behaves as a result.

## Basic structure of a k6 test ##

## 1. Default function ## : 
This is where the test logic resides. We should export the default function in our script.

## 2. Import ## :
To perform http transactions, we should import k6/http.

## 3. Options ## :
It enable us to configure the execution of our tests such as defining the no. of virtual users, the test duration or setting performance thresholds. 
