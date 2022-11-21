import { Component } from "react";
import { Form, Label, Input, Button, Col, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MakeAccount extends Component {
    constructor(props) {
        super(props);
        this.divStyle = {
            width: '600px', height: '430px', textAlign: 'left',
            margin: '100px auto', border: '2px solid grey',
            padding: '40px', borderRadius: '20px'
        };
        this.state = {
            acc: {
                id: '',
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

    changeSpecial = (e) => {
        this.setState({ special: e.target.checked })
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div style={this.divStyle}>
                <Form>
                    <FormGroup row>
                        <Label for="id" sm={4}>계 좌&nbsp; 번 호</Label>
                        <Col sm={5}>
                            <Input type="text" name="id" id="id" sm={6} value={this.state.acc.id} />
                        </Col>
                        <Col>
                            <Button sm={2} color='primary' style={{ width: '100px' }}>중복</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={4}>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</Label>
                        <Col>
                            <Input type="text" name="name" id="name" sm={8} value={this.state.acc.name} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={4}>비 밀&nbsp; 번 호</Label>
                        <Col>
                            <Input type="password" name="password" id="password" sm={8} value={this.state.acc.password} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label check sm={4}>
                            {/* {' '} << 한칸 띄우고 싶을 때 사용 가능 */}
                            <Input type="checkbox" checked={this.state.special} onChange={this.changeSpecial} />특수계좌
                        </Label>
                        <Col>
                            <Input type="select" name="grade" id="grade" sm={8} style={{ color: 'grey' }} disabled={!this.state.special}>
                                <option>VIP</option>
                                <option>Gold</option>
                                <option>Silver</option>
                                <option>Normal</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button sm={12} style={{ width: '100%' }} color='primary'>계좌 개설</Button>
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