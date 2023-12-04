import React, { useState } from 'react';

const PasswordTooggle = () => {

    state = {isPasswordShown : false}

    tooglePasswordVisiblity = () => {
        const {isPasswordShown} = this.state;
        this.setState({isPasswordShown : !isPasswordShown});
      
};

export default PasswordTooggle;