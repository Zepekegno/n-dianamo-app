import AuthContext from 'contexts/AuthContext'
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default (props) => {
    const state = useSelector(state => state?.login)
    const dispatch = useDispatch()
    const context = useContext(AuthContext)

    return null
}