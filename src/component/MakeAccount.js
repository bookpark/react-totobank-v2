import { Component } from "react";
import { Form, Label, Input, Button, Col, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MakeAccount extends Component {
    constructor(props) {
        super(props);
        this.divStyle = {
            width: '600px', height: '430px', textAlign: 'left',
            margin: '80px auto', border: '2px solid grey',
            padding: '40px', borderRadius: '20px'
        };
    }

    render() {
        return (
            <div style={this.divStyle}>
                <Form>
                    <FormGroup row>
                        <Label for="id" sm={4}>계 좌&nbsp; 번 호</Label>
                        <Col>
                            <Input type="text" name="id" id="id" sm={6} />
                        </Col>
                        <Col>
                            <Button sm={2} color='primary' style={{ width: '100px' }}>중복</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={4}>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</Label>
                        <Col>
                            <Input type="text" name="name" id="name" sm={8} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={4}>비 밀&nbsp; 번 호</Label>
                        <Col>
                            <Input type="password" name="password" id="password" sm={8} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label check sm={4}>
                            {/* {' '} << 한칸 띄우고 싶을 때 사용 가능 */}
                            <Input type="checkbox" />특수계좌
                        </Label>
                        <Col>
                            <Input type="select" name="grade" id="grade" sm={8} style={{ color: 'grey' }}>
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
            </div>
        )
    }
}

export default MakeAccount;