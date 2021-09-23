import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListDetails } from '../store/actions/lists'

class TruckDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.getListDetails(this.props.match.params.id)
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center mt-3">Detail Page</h1>
                <h2>This page is the truck details from list page </h2>
            </React.Fragment >
        )
    }
}

const mapStateToProps = state => (
    { detailLists: state.lists.detailLists }
)

const mapDispatchToProps = { getListDetails }

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetails)