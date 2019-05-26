# Inference-Engine

##Install

###After clone this repository you need to do
`npm install `

###For the case you wanna try just put in cases folder with any extension

###The sintaxys of BC should be:
`BC{
       
}`
###Where each knowledge should have this sintaxys:

####Simple
`A->B` 
####And
`A&C->B` 
####OR
`A|C->B`


###How to run

`node main.js file={nameofyourcase.yourextension} {method}` 

###Method is the forward chaining or backward chaining, just replace {method} by the method you wanna try by: forward or backward
###Full Example:

`node main.js file=test1.txt backward`
