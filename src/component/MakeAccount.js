import { Component } from "react";
import { Form, Label, Input, Button, Col, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class MakeAccount extends Component {
    constructor(props) {
        super(props);
        this.divStyle = {
            width: '556px', height: '350px', textAlign: 'left',
            margin: '100px auto', border: '2px solid grey',
            padding: '40px', borderRadius: '20px'
        };
        this.state = {
            acc: {
                accountNumber: '',
                name: '',
                password: '',
                grade: ''
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

    changeSpecial = (e) => {
        this.setState({ special: e.target.checked })
        if (!e.target.checked) {
            this.setState({ acc: { ...this.state.acc, grade: '' } });
        }
    }

    toggle = (e) => {
        this.setState({ modal: !this.state.modal });
    }

    submit = (e) => {
        console.log(JSON.stringify(this.state.acc));
        axios.post('http://localhost:8080/api/make-account', null, { params: this.state.acc }
        ).then((response) => {
            this.setState({ msg_header: '계좌개설', msg_body: '계좌가 개설되었습니다.' });
            this.toggle();
        }).catch((error) => {
            this.setState({ msg_header: '오류', msg_body: '계좌개설에 실패했습니다.' });
            this.toggle();
        })
    }

    render() {
        return (
            <div style={this.divStyle}>
                <Form>
                    <FormGroup row>
                        <Label for="accountNumber" sm={4}>계 좌&nbsp; 번 호</Label>
                        <Col sm={5}>
                            <Input type="text" name="accountNumber" id="accountNumber" sm={6} value={this.state.acc.accountNumber} onChange={this.change} />
                        </Col>
                        <Col>
                            <Button sm={2} color='primary' style={{ width: '100px' }}>중복</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={4}>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</Label>
                        <Col>
                            <Input type="text" name="name" id="name" sm={8} value={this.state.acc.name} onChange={this.change} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={4}>비 밀&nbsp; 번 호</Label>
                        <Col>
                            <Input type="password" name="password" id="password" sm={8} value={this.state.acc.password} onChange={this.change} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label check sm={4}>
                            {/* {' '} << 한칸 띄우고 싶을 때 사용 가능 */}
                            <Input type="checkbox" checked={this.state.special} onChange={this.changeSpecial} />특수계좌
                        </Label>
                        <Col>
                            <Input type="select" name="grade" id="grade" sm={8} style={{ color: 'grey' }} disabled={!this.state.special} onChange={this.change}>
                                <option>VIP</option>
                                <option>Gold</option>
                                <option>Silver</option>
                                <option>Normal</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button sm={12} style={{ width: '100%' }} color='primary' onClick={this.submit}>계좌 개설</Button>
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

export default MakeAccount;