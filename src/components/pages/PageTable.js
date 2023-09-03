import React from 'react';
//import {  useSelector } from 'react-redux';
import { Button, Form, } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const PageTable = () => {
    
        const { id } = useParams();
    return (
        <Form>
            <h1>Table {id}</h1>
				<Form.Group className="mt-3">
					<Form.Label className="me-3 fw-bold">Status:</Form.Label>
					<Form.Select
						className="d-inline-block w-25 text-center ms-1"
						aria-label="table status"
						value={'0'}
						onChange={'0'}
					>
						
					</Form.Select>
				</Form.Group>
                <Form.Group className="mt-2 d-flex align-items-center w-25">
					<Form.Label className="me-3 fw-bold">People:</Form.Label>
					<Form.Control
						
						htmlSize={1}
						className="d-inline-block me-2"
						value={'people'}
						onChange={'0'}
					/>
					{'/'}
					<Form.Control
						// {...register('maxPeople', { min: 0, max: '10' })}
						htmlSize={'1'}
						className="d-inline-block ms-2"
						value={'maxPeople'}
						onChange={'setMaxPeople'}
					/>
				</Form.Group>
                <Form.Group className="mt-2 mb-4 w-25">
						<Form.Label className="me-3 fw-bold w-25">
							Bill:
						</Form.Label>
						<span className="me-1">$</span>
						<Form.Control
							// {...register('bill', { min: 0 })}
							type="number"
							className="w-50 text-center d-inline-block"
							value={'bill'}
							onChange={'setBill'}
						/>
						
							<small className="d-block form-text text-danger mt-2">
								This field needs to be a number greather than 0
							</small>
						
                </Form.Group>
                <Button type="submit">Update</Button>
        </Form>
        
    )
};


export default PageTable;