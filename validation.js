// Valid RegEx in JS
// const reg = /[a-z]/gi;
// Another way to write valid RegEx in JS
// const reg2 = new RegExp(/[a-z]/,"gi");

// Collect all the input fields from the HTML form and store in a constant called inputs
const inputs = document.querySelectorAll("input");

// RegEx object called patterns which stores all the RegEx patterns for the validation on the HTML form
const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-zA-Z\d\.-_]+)@([a-zA-Z\d-_]+)\.([a-z]{2,8})(\.[a-zA-Z]{2,8})?$/,
    telephone: /^\d{8}$/,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/

};

// Validation function - 2 params. First is field from eventlistener below, second is the regex pattern from the patterns above
function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

// Create eventlistener for all input fields
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});