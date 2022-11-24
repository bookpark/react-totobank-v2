import { Component } from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import axios from 'axios';

class AccountList extends Component {
    constructor(props) {
        super(props);
        this.divStyle = {
            width: '556px', height: '275px', textAlign: 'left',
            margin: '100px auto',
            padding: '40px', borderRadius: '20px'
        };
        this.state = {
            accs: [

            ]
        }
    }

    // componentDidMount() {
    //     axios.get('http://localhost:8000/api/list')
    //         .then((response) => {
    //             this.setState({ accs: response.data })
    //         })
    // }

    toggle = (e) => {
        this.setState({ modal: !this.state.modal });
    }

    submit = (e) => {
        axios.post('http://localhost:8080/api/list', null, {
        }).then((response) => {
            console.log(response.data)
            const lacc = response.data;
            this.setState({ accs: lacc });
            this.setState({ msg_header: '성공', msg_body: '목록을 성공적으로 가져왔습니다.' })
            this.toggle();
        }).catch((error) => {
            console.log(error);
            this.setState({ msg_header: '오류', msg_body: '목록을 가져오지 못했습니다.' });
            this.toggle();
        })
    }

    render() {
        return (
            <div style={this.divStyle}>
                <Button onClick={this.submit}>계좌 목록 가져오기</Button>
                <Table bordered striped size='sm'>
                    <thead>
                        <tr>
                            <th>계좌번호</th>
                            <th>이름</th>
                            <th>잔액</th>
                            <th>등급</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.accs.map((acc) => (
                            <tr key={acc.id}>
                                <td>{acc.accountNumber}</td>
                                <td>{acc.name}</td>
                                <td>{acc.balance}</td>
                                <td>{acc.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.state.msg_header}</ModalHeader>
                    <ModalBody>
                        {this.state.msg_body}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>닫기</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default AccountList;