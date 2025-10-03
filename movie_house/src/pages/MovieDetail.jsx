import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const {id} = useParams();
    console.log(id)
  return (
    <div>MovieDetail</div>
  )
}
