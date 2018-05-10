import React, { Component } from 'react';
import '../Login.css';
import logo from '../logo.svg';

import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            isLogged: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        if (this.state.username === "jcbuendia" && this.state.password === "jcbuendia") {
            this.setState({username: '', password: '', isLogged: true});
        }else{
            this.setState({username: '', password: '', isLogged: false});
        }
    }

    render() {
        return (
            <div className="Login">
                { this.state.isLogged ?
                    <Redirect to="/home"/>
                    :
                    <form onSubmit={ this.onSubmit }>
                        <div className="container">
                            <label htmlFor={"uname"}/>Username
                            <input  type={"text"}
                                    placeholder={"Ingresa usuario"}
                                    name={"uname"}
                                    value= { this.state.username }
                                    onChange={ (event) => { this.setState({ username: event.target.value })}}
                                    required/>
                            <label htmlFor={"psw"}/>Password
                            <input  type={"password"}
                                    placeholder={"Ingresa password"}
                                    name={"psw"}
                                    value= { this.state.password }
                                    onChange={ (event) => { this.setState({ password: event.target.value })}}
                                    required/>
                            <button type={"submit"}>Iniciar sesión</button>
                            <label/>
                            <input type={"checkbox"} name={"remember"}/> Recuerdame
                        </div>
                        <div className={"container"}>
                            <span className={"psw"}>¿Olvidaste tu <a href="#">contraseña?</a></span>
                        </div>
                    </form>
                }
            </div>
        );
    }
}

export default Login;
