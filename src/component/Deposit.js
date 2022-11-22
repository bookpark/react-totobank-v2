import { Component } from "react";
import { Form, Label, Input, Button, Col, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Deposit extends Component {
    constructor(props) {
        super(props);
        this.divStyle = {
            width: '556px', height: '250px', textAlign: 'left',
            margin: '100px auto', border: '2px solid grey',
            padding: '40px', borderRadius: '20px'
        };
        this.state = {
            acc: {
                accountNumber: '',
                money: '',
            },
            special: false,
            modal: false,
            msg_header: '',
            msg_body: ''
        }
    }

    // id, name, password, option을 위한 change 함수
    change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ acc: { ...this.state.acc, [name]: value } });
    }

    toggle = (e) => {
        this.setState({ modal: !this.state.modal });
    }

    deposit = (e) => {
        console.log(JSON.stringify(this.state.acc));
        axios.post('http://localhost:8080/api/deposit', null, {
            params: this.state.acc
        })
            .then((response) => {
                console.log(response.data)
                this.setState({ msg_header: "입금", msg_body: `잔 액 : ${response.data}원` });
                this.toggle();

            }).catch((error) => {
                this.setState({ msg_header: '오류', msg_body: '입금을 실패했습니다.' })
                this.toggle();
            })
    }

    render() {
        return (
            <div style={this.divStyle}>
                <Form>
                    <FormGroup row>
                        <Label for="accountNumber" sm={4}>계 좌 번 호</Label>
                        <Col>
                            <Input type="text" name="accountNumber" id="accountNumber" sm={6} value={this.state.acc.accountNumber} onChange={this.change} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="money" sm={4}>입&nbsp;&nbsp;&nbsp;금&nbsp;&nbsp;&nbsp;액</Label>
                        <Col>
                            <Input type="text" name="money" id="money" sm={8} value={this.state.acc.money} onChange={this.change} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button sm={12} style={{ width: '100%' }} color='primary' onClick={this.deposit}>입금</Button>
                        </Col>
                    </FormGroup>
                </Form>

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

export default Deposit;