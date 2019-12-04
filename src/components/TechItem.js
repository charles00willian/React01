import React from 'react';
import propTypes from 'prop-types';

function TechItem({tech, onDelete}){ // function props can be recovered like this
  return(
    <li key={tech}>
      {tech}
      <button onClick={onDelete} type="button">Remove</button>
    </li>
  )
}

// define default props, in case the there is no content
TechItem.defaultProps = {
  tech: 'Oculto'
}

// define the type of a property, needs to add prop-types as a devdepencie
TechItem.propTypes = {
  tech: propTypes.string,
  onDelete: propTypes.func.isRequired,
}

export default TechItem;