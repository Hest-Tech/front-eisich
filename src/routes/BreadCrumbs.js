import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";


const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
    <React.Fragment>
    	{breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </React.Fragment>
));

export default Breadcrumbs;