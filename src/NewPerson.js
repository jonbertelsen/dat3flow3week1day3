import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const NewPerson = (props) =>
{
    const emptyPerson = { id: '', name: '' }
    const [person, setPerson] = useState(emptyPerson)

    useEffect(() =>
    {
        setPerson(props.person)
    }, [props.person])

    const savePerson = evt =>
    {
        evt.preventDefault();
        if (person.name === '')
        {
            return;
        }
        props.addEditPerson(person)
        setPerson(emptyPerson)
    };

    const onChange = evt =>
    {
        const val = evt.target.value;
        person.name = val;
        setPerson({ ...person });
    };

    const title = person.id === "" ? "Create new person" : "Edit person"
    const actionButton = person.id === "" ? "Add" : "Update"

    return (
        < div className="smallComponentDiv" >
            <h3>{title}</h3>
            <form>
                <input onChange={onChange} value={person.name} className="form-control" type='text' />
                <button onClick={savePerson} className="btn btn-primary mt-2">{actionButton}</button>
            </form>
            {JSON.stringify(person)}
        </div >
    );
}

export default NewPerson;

NewPerson.propTypes = {
    person: PropTypes.object,
    addEditPerson: PropTypes.func
}