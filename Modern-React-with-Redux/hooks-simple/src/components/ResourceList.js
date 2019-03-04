import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = props => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(res.data);
  };

  useEffect(() => {
    fetchResource(props.resource);
  }, [props.resource]);
  return resources;
};

const ResourceList = props => {
  const resources = useResources(props);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
