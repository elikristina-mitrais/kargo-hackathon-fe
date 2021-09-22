import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getStaff } from '../../store/actions/staffs'
import StaffTable from './Table';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getStaff()
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center mt-3">Staffs Page</h1>
                <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
                    <StaffTable users={this.props.staffs} />
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => (
    { staffs: state.staffs.staffs }
)

const mapDispatchToProps = { getStaff }

export default connect(mapStateToProps, mapDispatchToProps)(Staff)