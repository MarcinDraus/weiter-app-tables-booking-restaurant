

//selectors
export const getAllTables = (state) => state.tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;

// action creators
const ADD_TABLE = createActionName('ADD_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

export const addPost = (payload) => ({
  type: ADD_TABLE,
  payload
});

export const editPost = (payload) => ({
  type: REMOVE_TABLE,
  payload
});

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
        case 'ADD_TABLE':
            // Przykład obsługi dodawania nowej tabeli
            return {
              ...statePart,
              tables: [...statePart.tables, action.payload], // Dodaj nową tabelę do istniejącej listy
            };
          case 'REMOVE_TABLE':
            // Przykład obsługi usuwania tabeli
            return {
              ...statePart,
              tables: statePart.tables.filter((table) => table.id !== action.payload), // Usuń tabelę z listy
            };
          // Dodaj więcej przypadków, aby obsługiwać inne akcje
          default:
            return statePart; // Domyślnie zwracaj stan bez zmian
      





    }
};
export default tablesReducer;
