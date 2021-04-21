
let name = '';
let email = '';
let num = '';

function getName() {
    let nameId = document.getElementById('fname');
    if (nameId) {
        if (nameId.value != null) {
            name = nameId.value;

            console.log(name);
        } else {
            alert('fill your name');
        }
    }
}
//console.log('log running')kfktdkydky;
function getEmail(input) {
    let emailId = document.getElementById('email');

    if (emailId) {
        var input1 = document.createElement("input")
       input1.value=emailId.value;
        var before = document.getElementById('before');
        var element = document.getElementById('e-mail');
        element.insertBefore(input1,before);
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailId.value)) {
            email = emailId.value;
        } else {
            alert('fill correct email');
        }
    }
}

function getNum() {
    let numId = document.getElementById('num');
    if (numId) {
        if (numId.value.length == 10) {
            num = numId.value;
        } else {
            alert('fill correct number');
        }
    }
}



