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

var Avatar = function Avatar(props) {
    return React.createElement('img', { src: props.user.avatar, alt: props.user.name });
};
var UserName = function UserName(props) {
    return React.createElement(
        'p',
        null,
        props.user.name
    );
};

var User = function User(props) {
    return React.createElement(
        'div',
        { className: 'user-item' },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(UserName, { user: props.user })
    );
};

var UsersList = function UsersList(props) {
    var userList = props.list.map(function (user, i) {
        return React.createElement(User, { user: user, key: i });
    });
    return React.createElement(
        'div',
        { className: 'list-teachers' },
        userList
    );
};

ReactDOM.render(React.createElement(UsersList, { list: teachers }), document.getElementById('app2'));