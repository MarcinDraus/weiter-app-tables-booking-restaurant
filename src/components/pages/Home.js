import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { getAllTables } from '../../Redux/tablesRerdux';
import { useSelector } from 'react-redux';

const Home = () => {
    const tables = useSelector(getAllTables);
    return (
        <Container>
            <Row className="mb-4">
                <Col xs={6}>
                    <h2>All tables</h2>
                </Col>
                {tables.map((table) => (
                    <div className="border-bottom py-2 d-flex align-items-center" key={table.id}>
                       
                       <h3 className="fw-bold">Table {table.id}</h3>
                        
                    <div className="ms-3 flex-grow-1"><b>Status:</b> {table.status}</div>
                        {table.name}
                    </div>
                ))}
            </Row>
            
        </Container>
    );
};

export default Home;
