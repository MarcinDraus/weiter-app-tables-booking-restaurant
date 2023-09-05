import React from 'react';
import { Container, Col, Row, Button, } from 'react-bootstrap';
import { getAllTables } from '../../Redux/tablesRerdux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTables } from '../../Redux/tablesRerdux';
import { useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch();
    const tables = useSelector(getAllTables);

    useEffect(() => {
		dispatch(fetchTables());
	}, [dispatch]);
    return (
        <Container>
            <Row className="mb-4">
                <Col xs={6}>
                <h1 className="mb-3">All tables</h1>
                </Col>
                {tables.map((table) => (
                <div className="border-bottom py-2 d-flex align-items-center" key={table.id}>
                       
                  <h3 className="fw-bold">Table {table.id}</h3>
                        
                  <div className="ms-3 flex-grow-1"><b>Status:</b> {table.status}</div>
                   <Link to={`/pagetable/${table.id}`}>
                    <Button variant="primary">Show more</Button>
                   </Link>

                </div>
                ))}
            </Row>
            
        </Container>
    );
};

export default Home;
