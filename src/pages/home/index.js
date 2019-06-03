import React, { PureComponent } from 'react';
import Style from './index.css';
import Melon from 'images/melon.png';

export default class Home extends PureComponent {
    render() {
        return (
            <div className={Style['page-home']}>
                <p>this is home.</p>
                <img src={Melon} />
            </div>
        )
    }
}
