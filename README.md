## keybook.js - Easy library to the management of session/local storage in JavaScript

<img align="left" width="75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Database.svg/640px-Database.svg.png">

JavaScript library aimed at ease of use of location and session storage with dynamic variable type limiters and expiration time.
Currently in **Development Stage** 
<br><br><br>
## Usage:
### All library features can be called up using `keybook.*` <br>
## Functions:
`keybook.[local/session]Store(name, content, type, optionalTimeout)`: Stores a value in [local/session]Storage if the key does not exist. The "name", 
"content" and "type" arguments are required. The "optionalTimeout" argument is optional and inserts an expiration time for the value.
<br><br>
`keybook.[local/session]Get(name, type)`: Gets a value stored in [local/session]Storage in the same type in which it was entered.
<br><br>
`keybook.[local/session]GetRaw(name)`: Gets a value stored in [local/session]Storage in the raw string form.
<br><br>
`keybook.[local/session]Edit(name, content, type)`: Edit the content and type of an entry in [location/session]Storage.
<br><br>
`keybook.[local/session]Dele(name)`: Delete an entry in [location/session]Storage.
<br><br>
`keybook.[local/session]Clear(name)`: Delete all the entries in [location/session]Storage.
## Thanks
Thank you for reading about the project. If possible, consider collaborating in some way with the project, sharing it, or leaving a star.

