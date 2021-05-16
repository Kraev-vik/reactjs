import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const arrMes = ["Сообщение"];

const addMes = ()=> {
    arrMes.push("Новое сообщение")
    render()
}

const Message = ({ message }) => {
    return (
        <React.Fragment>
            <h1>{message}</h1>
        </React.Fragment>
    )
}

const MessageField = ({ arrMes }) => {
    return (
        <React.Fragment>
            <button onClick={addMes}>Отправить сообщение</button>
            {arrMes.map((message, index) => (< Message message = {message} key = {index} isVisible = {true}/>))}
        </React.Fragment>
    )
}

const render = () => {
    ReactDOM.render(
    <MessageField arrMes={arrMes} />,
    document.getElementById("app"),
    )
}

render()