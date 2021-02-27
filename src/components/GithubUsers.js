import React from 'react';
import './Users.css';
const GithubUsers = (props) => {
    console.log(props.user);
    const {login, avatar_url} = props.user;
    const userInfoStyle = {
        marginLeft: '20px'
    }
    const btnStyle = {
          border : 'none',
          display : 'inline-block',
          backgrounColor : 'gray',
          color : 'black',
          padding : '9px 25px',
          cursor : 'pointer'
    }
    return (
        <div className='users-container'>
            <div className='users'>
                <div>
                    <img className='avatar_img' src={avatar_url} alt=""/>
                </div>
                <div style={userInfoStyle} >
                    <h3> {login} </h3>
                    <button style={btnStyle} >Profile</button>
                </div>
            </div>
        </div>
    );
};

export default GithubUsers;