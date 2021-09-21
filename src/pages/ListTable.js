import React from 'react'
import { Container } from 'react-bootstrap';
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
        text: 'name',
        sort: true,
        headerStyle: {
            backgroundColor: '#e17055',
            color: '#fff',
            textAlign: 'center'
        },
    },];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
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