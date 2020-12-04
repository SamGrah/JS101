/*
The multidimensional array myArr calls the map method. An anonymous arrow
function is passed to the map method as a callback function. For each nested
array within the caller, the map method invokes the callback function where the
argument arr passed to the callback function is the current nested array
element of myArr.
The callback function invokes the console.log function, passing it a reference
to the element at the 0th index of the arr parameter. The console.log prints
the value referenced to the screen and returns a value of undefined. The
callback function return statement evaluates the reference, again to the 0th
element of the arr parameter, and then that value is returned by the callback
function.
The map function appends each returned value of the callback function
to an array and returns this array after the callback function has been invoked
for each nested array element of the array myArr.
The returned array is comprises [1, 3].
*/