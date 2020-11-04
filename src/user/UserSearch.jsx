import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setSearch } from '../actions/userActions';

const UserSearch = () => {
   const dispatch = useDispatch();
   const userName = useSelector(state => state.search);

   const handleSubmit = () => {
       dispatch(fetchUser(userName));
   };

   const handleChange = ({ target }) => {
       dispatch(setSearch(target.value));
   };

   return (
       <>
        <input onChange={handleChange} />
        <button onClick={handleSubmit}>Search users</button>
       </>
   );
};

export default UserSearch;