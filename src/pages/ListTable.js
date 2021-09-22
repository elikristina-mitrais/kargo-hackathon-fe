import React from 'react'
import { Container } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'


const { SearchBar } = Search

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const columns = [
    {
        dataField: 'id',
        text: 'No.',
        sort: true,
        headerStyle: {
            width: '10%',
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        dataField: 'name',
        text: 'Name',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    },
    {
        dataField: 'link',
        text: 'Action',
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={"detail/" + row.id}>
                        <Button className="mr-2">
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </Button>
                    </Link>
                    <Link to={"edit-detail/" + row.id}>
                        <Button className="mr-2">
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </Link>
                    <Button className="mr-2">
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            )
        }
    }];

const ListTable = (props) => {
    return (
        <Container>
            <ToolkitProvider
                bootstrap4 keyField='id' data={props.users} columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <div className="float-right">
                                <SearchBar {...props.searchProps} className="color-grep my-3" placeholder="Search .." />
                            </div>
                            <BootstrapTable
                                {...props.baseProps} defaultSorted={defaultSorted} rowStyle={{ textAlign: 'center' }} noDataIndication="No data" pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container>
    )
}

export default ListTable