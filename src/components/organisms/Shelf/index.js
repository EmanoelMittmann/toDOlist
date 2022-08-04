import { useEffect, useState } from "react"
import Task from "./task/index"

const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: 'relative'
}

export default ({ data, onSelect }) => {

    return (
        <div style={divStyle}>
            {data.map(task =>
                <Task key={task.id} task={task} setShowModal={() => onSelect(task.id)} />
            )}
        </div>
    )
}
