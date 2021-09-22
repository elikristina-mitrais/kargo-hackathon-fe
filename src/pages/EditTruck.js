import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

class EditTruck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            licenseNumber: '',
            licenseType: '',
            truckType: '',
            productionYear: '',
            stnk: '',
            kir: '',
        }
    }

    submitData = (e) => {
        e.preventDefault();
        const { licenseNumber, licenseType, truckType, stnk, kir, productionYear } = this.state
        // this.props.editTruckDetails(licenseNumber, licenseType, truckType, stnk, kir, productionYear)
        this.props.onSubmit(false)
    }

    changeText = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>License Number</Form.Label>
                            <Form.Control name="licenseNumber" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>License Type</Form.Label>
                            <Form.Control name="licenseType" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Truck Type</Form.Label>
                            <Form.Control name="truckType" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Production Year</Form.Label>
                            <Form.Control name="productionYear" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>STNK</Form.Label>
                            <Form.Control name="stnk" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>KIR</Form.Label>
                            <Form.Control name="kir" onChange={(event) => this.changeText(event)} type="text" placeholder="" />
                        </Form.Group>
                        <Button className="" onClick={this.submitData}>Edit unit</Button>
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}

// const mapStateToProps = state => (
//     { transferMsg: state.user.transferMsg }
// )

// const mapDispatchToProps = { giftCarrot, clearPayload }

export default connect(null, null)(EditTruck)