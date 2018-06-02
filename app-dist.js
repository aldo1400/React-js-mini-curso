'use strict';

// Vainilla JS

// const el=document.createElement('h1');
// const child=document.createElement('span');

// el.setAttribute('id','title');
// el.textContent='Hola ';
// child.textContent='mundo';
// el.appendChild(child);
// document.getElementById('app').appendChild(el);


// Con React js

// const el=React.createElement('h1',
// {id:'title'},
// 'Hola ',
// React.createElement('span',null,'mundo')
// );
// ReactDOM.render(el,document.getElementById('app'));


// Con React y JSX


// const el=(<h1 id="title" className="title">
// Hola 
// <span>mundo</span> 
// </h1>);
// ReactDOM.render(el,document.getElementById('app'));


// Reloj con javascript

// const app=document.getElementById('app');

// function reloj(){
//     app.textContent=new Date().toLocaleTimeString();   

// }

// setInterval(reloj,1000);
// reloj();


// Reloj con React y JSX


function reloj() {
    var reloj1 = new Date().toLocaleTimeString();
    var now = React.createElement(
        'span',
        null,
        reloj1
    );
    ReactDOM.render(now, document.getElementById('app'));
}

setInterval(reloj, 1000);