import React from 'react'
import { useParams } from 'react-router-dom';

function View() {
    const { id } = useParams();
  return (
      <div> View { id}</div>
  )
}

export default View;