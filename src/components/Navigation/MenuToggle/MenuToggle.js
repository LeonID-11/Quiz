import React  from 'react';
import './MenuToggle.css';

const MenuToggle = props => {
    const cls = [
        'fa',
        'MenuToggle'
    ]
    if(props.isOpen){
        cls.push('fa-times open')
    }else{
        cls.push('fa-bars')
    }
    return(
        <i 
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle;
