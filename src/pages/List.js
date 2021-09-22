import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getList } from '../store/actions/lists'
import ListTable from './ListTable';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getList()
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center mt-3">List Page</h1>
                <Container className="shadow-lg p-3 mt-4 mb-5 bg-white rounded">
                    <Button style={{ backgroundColor: '#e17055', borderColor: '#e17055' }}>Add new</Button>
                    <ListTable users={this.props.lists} />
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => (
    { lists: state.lists.lists }
)

const mapDispatchToProps = { getList }

export default connect(mapStateToProps, mapDispatchToProps)(List)