import PropTypes from 'prop-types';

const PersonList = (props) =>
{
    const { persons, deletePerson, editPerson } = props
    return (
        <div className="smallComponentDiv">
            <h3>All Person</h3>
            <ul>
                {persons.map(p =>
                    <li key={p.id}>
                        {p.name}
                        &nbsp;(<a href="xx" onClick={(e) => { e.preventDefault(); deletePerson(p.id) }}>delete</a> /
                        &nbsp;<a href="xx" onClick={(e) => { e.preventDefault(); editPerson(p) }}>edit</a>)
                    </li>)}
            </ul>
        </div>
    );
}

export default PersonList;

PersonList.propTypes = {
    persons: PropTypes.array
}