import React from "react"

const ErrorHandling = ({errMsg,children}) => {
    return(
        errMsg ? <div> errMsg </div> : children
    )
}

export default ErrorHandling