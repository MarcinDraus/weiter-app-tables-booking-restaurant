import React from 'react';
import {  useSelector } from 'react-redux';
import { Button, Form, } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getTableById, editTablesRequest, getAllTables,} from '../../Redux/tablesRerdux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const PageTable = () => {
    const statusSelection = ['Free', 'Reserved', 'Cleaning', 'Busy'];
    const { tableId } = useParams();
	//const { id } = useParams();
    const table = useSelector((state) =>
		getTableById(state, parseInt(tableId)));
console.log(table, 'table')
    const allTables = useSelector(getAllTables);

    const dispatch = useDispatch();
	const navigate = useNavigate();

    const [status, setStatus] = useState(table? table.status : '');
	const [people, setPeople] = useState(table? table.people : 0);
	const [maxPeople, setMaxPeople] = useState(table? table.maxPeople : 0);
	const [bill, setBill] = useState(table? table.bill : 0);

    const handleSubmit = (e) => {
		const updatedTable = {
			id: tableId,
			status,
			people,
			maxPeople,
			bill,
		};
		dispatch(editTablesRequest(updatedTable));
		navigate('/');
	};
    const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm();
	useEffect(() => {
		if (tableId > allTables.length) {
			const navigateToHome = async () => {
				navigate('/');
			};

			navigateToHome();
		}
	}, [tableId, allTables, navigate]);

    if (!table ) {
		return (

			<><button className="btn btn-primary" type="button" disabled>
					<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				    Loading...table
				</button></>
		);
	}

    return (
        <Form className="mt-3 d-flex flex-column gap-2"
        onSubmit={validate(handleSubmit)} >
            <h1>Table {tableId}</h1>
				<Form.Group className="mt-3">
					<Form.Label className="me-3 fw-bold">Status:</Form.Label>
					<Form.Select
						className="d-inline-block w-25 text-center ms-1"
						aria-label="table status"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					>
					{statusSelection.map((option, index) => {
							return (
								<option key={index} value={option}>
									{option}
								</option>
							);
						})}	
					</Form.Select>
				</Form.Group>
                <Form.Group className="mt-2 d-flex align-items-center w-25">
					<Form.Label className="me-3 fw-bold">People:</Form.Label>
					<Form.Control
						{...register('people', { min: 0, max: `${maxPeople}` })}
						htmlSize={1}
						className="d-inline-block me-2"
						value={people}
						onChange={(e) => setPeople(e.target.value)}
					/>
					{'/'}
					<Form.Control
						{...register('maxPeople', { min: 0, max: 10 })}
						htmlSize={1}
						className="d-inline-block ms-2"
						value={maxPeople}
						onChange={(e) => setMaxPeople(e.target.value)}
					/>
					</Form.Group>
				{(errors.maxPeople || errors.people) && (
					<small className="d-block form-text text-danger">
						Please provide number in format i.e "10/10"
					</small>
				)}
				{status === 'Busy' ? (
					<Form.Group className="mt-2 mb-4 w-25">
						<Form.Label className="me-3 fw-bold w-25">
							Bill:
						</Form.Label>
						<span className="me-1">$</span>
						<Form.Control
							{...register('bill', { min: 0 })}
							type="number"
							className="w-50 text-center d-inline-block"
							value={bill}
							onChange={(e) => setBill(e.target.value)}
						/>
						{errors.bill && (
							<small className="d-block form-text text-danger mt-2">
								This field needs to be a number greather than 0
							</small>
						)}
					</Form.Group>
				) : (
					''
				)}
                <Button type="submit">Update</Button>
        </Form>
        
    )
};


export default PageTable;