
// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)
// If a button/link in the table is clicked, populate #userView with the full details of the user.
// (bonus points if you make it a nice form as if the user was editable)
var theUsers = [];
window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function (){
        if(this.status == 200){
           var users = JSON.parse(this.responseText);
           var output = ''
            for(var i in users){
                theUsers.push(JSON.stringify(users[i]));
                output += 
                `<tr>
                <td>${users[i].id}</td>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
                <td><button id="${users[i].id}" onclick="viewUser(this)">view info</button></td>
                </tr>`
            };
            document.getElementById("userList").innerHTML = output;
        }
    };
    xhr.onerror = function (){
        console.log('error');
    };
    xhr.send();
}
//console.log(theUsers)
function viewUser(e){
    var index = e.id;
    var url = `https://jsonplaceholder.typicode.com/users/${index}`;
    var userView = document.getElementById("userView");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function (){
        if(this.status == 200){
           var user = this.responseText;
           userView.innerHTML = user;
        }
    };
    xhr.onerror = function (){
        console.log('error');
    };
    xhr.send();
}