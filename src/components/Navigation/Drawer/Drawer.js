import React, {Component} from 'react';
import './Drawer.css';
import Backdrop from '../../Ui/Backdrop/Backdrop'

const links = [1,2,3,4]

class Drawer extends Component{
    renderLinks(){
        return links.map((link, index)=>{
            return (
                <li key ={index}>
                    <a href={'#'+(index+1)}>Link {link}</a>
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
