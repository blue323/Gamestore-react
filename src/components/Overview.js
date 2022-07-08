import React from 'react'

const Overview = ({tasks}) => {
    const taskList = tasks.map(task => <li key={task.id}>{task.text}</li>)
    return (
        <ul>
            { taskList }
        </ul>
    )
}

export default Overview