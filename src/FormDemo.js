import React, { useState, useEffect } from "react";

const FormDemo = (props) =>
{
    const [newName, setNewPerson] = useState(props.newName)
    const [name, setName] = useState();

    useEffect(() =>
    {
        setNewPerson(props.newName)
        setName(props.newName)
    }, [props.newName])

    function handleChange(event)
    {
        const target = event.target
        const value = target.value

        setName(value)
    }

    function handleSubmit(event)
    {
        event.preventDefault()
        alert(name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>Name: </label>
                <input type="text" value={name} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
            { name}
            <p>newPerson: {newName}</p>
        </div >
    );
};

export default FormDemo