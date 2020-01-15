import React, {Component} from 'react';
import './Drawer.css';
import {NavLink} from 'react-router-dom';
import Backdrop from '../../Ui/Backdrop/Backdrop'

const links = [
    {to:'/', label:'Link', exact: true},
    {to:'/auth', label:'Auth', exact: false},
    {to:'/quiz-creator', label:'Create test', exact: false}

]

class Drawer extends Component{
    clickHandler = ()=>{
        this.props.onClose()
    }
    renderLinks(){
        return links.map((link, index)=>{
            return (
                <li key ={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            ) 
        })
    }
    render(){
        const cls = [
            'Drawer'
        ]
        if(!this.props.isOpen){
            cls.push('close')
        }
        return(
            <React.Fragment>
                {this.props.isOpen ?<Backdrop onClick={this.props.onClose}/> : null}
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Drawer;
