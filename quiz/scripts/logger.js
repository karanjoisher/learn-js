// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
        console.log("Error Message: ", this.errMsg);
};

const err1 = {
    errMsg: "This is error 1"
};

const err2 = {
    errMsg: "This is error 2"
};

logMsg.call(err1);
logMsg.call(err2);