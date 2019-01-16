import React from "react";
import FilterLink from "./FilterLink";
import { FILTERS } from "../filterConstants";

const Footer = () => (
  <p>
    <FilterLink filter={FILTERS.ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={FILTERS.COMPLETE}>Completed</FilterLink>
    {", "}
    <FilterLink filter={FILTERS.INCOMPLETE}>Incompleted</FilterLink>
  </p>
);

export default Footer;
