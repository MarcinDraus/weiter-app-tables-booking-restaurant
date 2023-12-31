
import { API_URL } from '../config';

//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => {
	console.log( tables, tableId)
	// eslint-disable-next-line eqeqeq
	return tables.find((table) => table.id == tableId);
};
// actions
const createActionName = actionName => `app/tables/${actionName}`;

// action creators
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');


export const updateTables = (payload) => ({ 
  type: UPDATE_TABLES,
   payload });

export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

export const editTablesRequest = (editedTable) => {
	return (dispatch) => {
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(editedTable),
		};
		fetch(`${API_URL}/tables/${editedTable.id}`, options).then(() =>
			dispatch(editTable(editedTable))
		);
	};
};

export const fetchTables = () => {
	return (dispatch) => {
		fetch(`${API_URL}/tables`)
			.then((res) => res.json())
			.then((tables) => {
				dispatch(updateTables(tables));
			})
			.catch((error) => console.log('error fetching tables:', error));
	};
};

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
    case UPDATE_TABLES:
			return [...action.payload];
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id
          ? { ...table, ...action.payload }
          : table
      );
        default:
          return statePart; 
  
  }
};
export default tablesReducer;
