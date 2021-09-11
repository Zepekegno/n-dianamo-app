import React from 'react'
import ActivityStatus from "./ActivityStatus"
import BorderBar from "./BorderBar"
import Distances from "./Distances"
import YearInterval from "./YearInterval"

const config = [
    {
        item: (props) => (<ActivityStatus {...props} />),
        bottomDivider: true
    },
    {
        item: (props) => (<YearInterval {...props} />),
        title: 'Years',
        bottomDivider: true
    },
    {
        item: (props) => (<Distances {...props} />),
        title: 'Distance (km)',
        bottomDivider: true
    },
]

export default FilterConfig = config