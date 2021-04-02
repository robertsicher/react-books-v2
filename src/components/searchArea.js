import React from 'react';
import { Form , Row , Col , Button } from 'react-bootstrap';


const SearchArea = (props) => {
    return(
    <div className='mt-3'>
        <Form onSubmit={props.searchBook}>
            <Form.Group as={Row} controlId="bookSearchInput">
                <Form.Label column sm="2">
                Book Search
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text" placeholder="Type your book name here" onChange={props.handleSearch} />
                </Col>
                <Col sm="2">
                <Button type='submit' variant="secondary" block>
                    Search
                </Button>
                </Col>
            </Form.Group>
        </Form>
    </div>  
    )
}

export default SearchArea;