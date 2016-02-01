import _ from 'underscore';
import React from 'react';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import NotFound from '../src/pages/NotFound.jsx';

const routeMapping = [
  {
    route: "/",
    component: Home
  },
  {
    route: "/about",
    component: About
  }
];

let RouteMapper = function(routeValue, isServerCall) {
  let result;
  let routeEntry = _.where(routeMapping, {route: routeValue});

  if (routeEntry.length === 1) {
    if(isServerCall) {
      result = {
        route: routeEntry[0].route,
        component: React.createFactory(routeEntry[0].component)
      };
    } else {
      result = routeEntry[0];
    }
  } else {
    if(isServerCall) {
      result = {
        route: "",
        component: React.createFactory(NotFound)
      };
    } else {
      result = {
        route: "",
        component: NotFound
      };
    }
  }

  return result;
};

module.exports = RouteMapper;
