import { useState, useEffect } from "react";
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

export default useResources;
