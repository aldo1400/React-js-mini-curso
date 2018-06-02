'use strict';

// function Saludar(props){
//     return <h1>Hola {props.name}</h1>
// }


// const Avatar=props=><img src={props.user.image} alt={props.user.name} />;
// const UserName=props=><p>{props.user.name}</p>;

// const User=props=>{
//     return (
//         <div className="user-item">
//          <Avatar  user={props.user}/>
//          <UserName user={props.user} />   

//         </div>
//     )
// };

// const user={
//     name:'Aldo x2',
//     image:'https://avatars0.githubusercontent.com/u/29287786?s=460&v=4',
// };

// ReactDOM.render(
//     <User user={user}/>
//     ,document.getElementById('app2'));


// ReactDOM.render(
// <div>
// <Saludar name="Daniel" />
// <Saludar name="Alexys" />
// <Saludar name="Rafa" />
// <Saludar name="Jhon" />
// <Saludar name="Francisco" />
// </div>
// ,document.getElementById('app'));


var teachers = [{
    name: 'Daniel Romero',
    avatar: 'https://avatars0.githubusercontent.com/u/29287786?s=460&v=4'
}, {
    name: 'Jon Mircha',
    avatar: 'https://avatars0.githubusercontent.com/u/29287786?s=460&v=4'
}, {
    name: 'Alexys Lozada',
    avatar: 'https://avatars0.githubusercontent.com/u/29287786?s=460&v=4'
}, {
    name: 'Rafa Ramos',
    avatar: 'https://avatars0.githubusercontent.com/u/29287786?s=460&v=4'
}, {
    name: 'Francisco Romero',
    avatar: 'https://avatars0.githubusercontent.com/u/29287786?s=460&v=4'
}, {
    name: 'Alvaro Felipe',
    avatar: 'https://avatars0.githubusercontent.com/u/29287786?s=460&v=4'
}];

// const Avatar=props=><img src={props.user.avatar} alt={props.user.name} />;
// const UserName=props=><p>{props.user.name}</p>;

// const User=props=>{
//     return (
//         <div className="user-item">
//          <Avatar  user={props.user}/>
//          <UserName user={props.user} />   

//         </div>
//     )
// };


// const UsersList=props=>{
//     const userList=props.list.map((user,i)=><User user={user} key={i}/>);
//     return <div className="list-teachers">
//         {userList}
//     </div>
// };

// ReactDOM.render(<UsersList list={teachers}/>,document.getElementById('app2'));


// Practica

var Avatar = function Avatar(props) {
    return React.createElement('img', { src: props.profesor.avatar, alt: props.profesor.name });
};

var Nombre = function Nombre(props) {
    return React.createElement(
        'p',
        null,
        props.profesor.name,
        ' !-!'
    );
};

var Profesor = function Profesor(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(Avatar, { profesor: props.profesor }),
        React.createElement(Nombre, { profesor: props.profesor })
    );
};

var ListProfesor = function ListProfesor(props) {
    var ListProf = props.listadeprofes.map(function (profe, i) {
        return React.createElement(Profesor, { profesor: profe, key: i });
    });
    return React.createElement(
        'div',
        null,
        ListProf
    );
};
ReactDOM.render(React.createElement(ListProfesor, { listadeprofes: teachers }), document.getElementById('app3'));