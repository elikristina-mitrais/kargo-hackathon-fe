import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getStaffDetail } from '../../store/actions/staffs'

class StaffDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getStaffDetail(this.props.match.params.id)
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center mt-3">Staff Detail Page</h1>
                <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
                    {this.props.staff && Object.keys(this.props.staff).map((key, idx) => (
                        <div key={idx}>
                            <span className="input-label">{key}: {this.props.staff[key]}</span>
                        </div>
                    ))}
                </Container>
            </React.Fragment >
        )
        
    }
}

const mapStateToProps = state => (
    { staff: state.staffs.staff }
)

const mapDispatchToProps = { getStaffDetail }

export default connect(mapStateToProps, mapDispatchToProps)(StaffDetail)