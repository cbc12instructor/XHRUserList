
// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)
// If a button/link in the table is clicked, populate #userView with the full details of the user.
// (bonus points if you make it a nice form as if the user was editable)

window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function (){
        if(this.status == 200){
           console.log(this.responseText);
        }
    };
    xhr.onerror = function (){
        console.log('error');
    };
    xhr.send();
}