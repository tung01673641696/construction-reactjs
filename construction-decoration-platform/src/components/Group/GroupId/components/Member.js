import React from 'react'
import { useSelector } from 'react-redux';
const Member = () => {
  const { groupList, loading, groupDetails } = useSelector(
    (state) => state.groupReducer
  );

  return (
    <div>{groupDetails.total_member} Members</div>
  )
}

export default Member