import React, { useState } from 'react'
import { Animated, ScrollView } from 'react-native'


import About from './About'
import Archive from './Archive'
import Avatar from './Avatar'
import Email from './Email'
import Job from './Job'
import LogoutButton from './LogoutButton'
import Password from './Password'
import Phone from './Phone'
import School from './School'


export default (props) => {
    const {user} = props
    const [expanded, setExpanded] = useState(false)
    const [archiveExpanded, setArchiveExpanded] = useState(false)
    const [phoneExpanded, setPhoneExpanded] = useState(false)
    const [emailExpanded, setEmailExpanded] = useState(false)
    const [schoolExpanded, setSchoolExpanded] = useState(false)
    const [jobExpanded, setJobExpanded] = useState(false)

    return (
        <Animated.View  {...props}>
            <Avatar user={user} />
            <ScrollView>
                <About />
                <School isExpanded={schoolExpanded} setExpanded={setSchoolExpanded} />
                <Job isExpanded={jobExpanded} setExpanded={setJobExpanded} />
                <Email isExpanded={emailExpanded} setExpanded={setEmailExpanded} />
                <Phone isExpanded={phoneExpanded} setExpanded={setPhoneExpanded} />
                <Archive user={user} isExpanded={archiveExpanded} setExpanded={setArchiveExpanded} />
                <Password isExpanded={expanded} setExpanded={setExpanded} />
                <LogoutButton user={user} />
            </ScrollView>
        </Animated.View>
    )
}