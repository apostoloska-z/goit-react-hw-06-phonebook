import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';



export const addContact = createAction('contacts/add', ({ name, number }) => {
    return {
        payload: {
            id: uuidv4(),
            name,
            number,
        },
    }
});

export const deleteContact = createAction('contacts/delete');

export const updateFilter = createAction('contacts/filter');





// import { types } from './types';
// import { v4 as uuidv4 } from 'uuid';

// export const addContact = ({ name, number }) => ({
//     type: types.ADD,
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
// })

// export const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// })

// export const updateFilter = value => ({
//     type: types.FILTER,
//     payload: value,
// })