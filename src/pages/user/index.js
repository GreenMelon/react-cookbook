import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUser } from "actions/user";

class User extends PureComponent {
    render() {
        const { user = {} } = this.props.user;
        return (
            <div>
                <div>
                    <p>用户信息：</p>
                    <p>用户名：{user.name}</p>
                    <p>介绍：{user.intro}</p>
                </div>
                <button onClick={() => this.props.getUser()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((user) => user, { getUser })(User);
