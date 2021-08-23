import React from 'react'
import ActivityStatus from "./ActivityStatus"
import BorderBar from "./BorderBar"
import ChildrenStatus from "./ChildrenStatus"
import Distances from "./Distances"
import FamilyStatus from "./FamilyStatus"
import YearInterval from "./YearInterval"

const config = [
    {
        item: (props) => (<BorderBar {...props} />),
        bottomDivider: false
    },
    {
        item: (props) => (<ActivityStatus {...props} />),
        bottomDivider: true
    },
    {
        item: (props) => (<YearInterval {...props} />),
        title: 'Interval d\'age',
        bottomDivider: true
    },
    {
        item: (props) => (<Distances {...props} />),
        title: 'Distance',
        bottomDivider: true
    },
    {
        item: (props) =>(<FamilyStatus {...props} />),
        title: 'Status',
        bottomDivider: true
    },
    {
        item: (props) => (<ChildrenStatus {...props} />),
        bottomDivider: true
    },
]

export default FilterConfig = config