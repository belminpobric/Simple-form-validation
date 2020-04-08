const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('.btn');
const myform = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const items = document.querySelector('.items');

myform.addEventListener('submit',function(e){
    e.preventDefault();
    if(email.value === '' || password.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields!';
        setTimeout(() => {
            location.reload();
        }, 800);
    }
    else if(!email.value.match(re)){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter valid email!';
        setTimeout(() => {
            location.reload();
        },800);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('Successfull login.'));
        items.appendChild(li);
        email.value = '';
        password.value = '';
    }
});
