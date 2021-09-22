import React from "react";

export const navigationRef = React.createRef()

export const useGetNavigation = () => {
    return navigationRef.current
}