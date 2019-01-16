import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FILTERS } from "../filterConstants";

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={filter === FILTERS.ALL ? "" : filter}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </NavLink>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf([FILTERS.ALL, FILTERS.COMPLETE, FILTERS.INCOMPLETE])
    .isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;
