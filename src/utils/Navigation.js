import React from "react";

export const navigationRef = React.createRef()

export const navigateWithoutProps = () => {
    return navigationRef.current
}