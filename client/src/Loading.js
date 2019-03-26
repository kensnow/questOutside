import React from "react"

const Loading = ({loading, children}) => {
    return (
        loading ? <div>Loading...</div> : children
    )
}

export default Loading