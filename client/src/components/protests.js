import React from 'react'

const Protests = ({ protestData}) => {
  return (
    <div>
      <center><h1>Protest List</h1></center>
      {protestData.map((Protest) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{protestData.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{protestData.username}</h6>
            <p class="card-text">{orotestData.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
};