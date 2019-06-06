# Inference-Engine
## Dependencies
You have to install node you can download the installer on this link:
https://nodejs.org/es/download/

## Install
After clone this repository you need to install all the dependencies.
`npm install `


## Sintaxys
For the case you wanna try your own problem create a file a save into cases folder

The sintaxys of BC should be:<br>
`BC{ `   
` `  
`}`<br>
Where each knowledge should have this sintaxys:<br>
Simple
`A->B` <br>
And
`A&C->B`<br> 
OR
`A|C->B`<br>

## RUN
How to run

`node main.js --file={nameofyourcase.yourextension} {method}` 

Method is the forward chaining or backward chaining, just replace {method} by the method you wanna try by: forward or backward.

Full Example:
`node main.js --file=test1.txt backward`

## Authors

* **yosetdn&Andrwws** - *Initial work* - [yosetdn](https://github.com/yosetdn)


## License

This project is licensed under the MIT License.
