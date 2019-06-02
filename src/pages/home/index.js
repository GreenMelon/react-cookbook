import React, { PureComponent } from 'react';
import Style from './index.css';

export default class Home extends PureComponent {
    render() {
        return (
            <div className={Style['page-home']}>
                this is home.
            </div>
        )
    }
}
