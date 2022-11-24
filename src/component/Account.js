import { Component } from 'react';

class Account extends Component {

    render() {
        const { accountNumber, balance, grade, id } = this.props;

        return (
                    <div>
                        {accountNumber}
                        {balance}
                        {grade}
                    </div>
        )
    }
}

export default Account;