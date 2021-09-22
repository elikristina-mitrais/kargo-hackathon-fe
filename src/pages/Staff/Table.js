import React from 'react'
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search

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
    }, {
        dataField: 'phone',
        text: 'Phone',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    }, {
        text: 'Action',
        sort: false,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
        formatter: (rowContent, row) => {
            console.log(row);
            return (    
                <div>
                    <Link to={`/staffs/detail/${row.id}`}><Button className="btn btn-primary">Details</Button></Link>
                    &nbsp;
                    <Link to={`/staffs/update/${row.id}`}><Button className="btn btn-secondary">Update</Button></Link>
                    &nbsp;
                    <Link to={`/staffs/delete/${row.id}`}><Button className="btn btn-warning">Delete</Button></Link>
                </div>
            )
        }
    }];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const StaffTable = (props) => {
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

export default StaffTable