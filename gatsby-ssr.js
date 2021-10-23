const React = require('react');


exports.onRenderBody = ({ setHeadComponents }) => {

  setHeadComponents([<script key='scriptThemes' src='/scriptThemes.js' />])
};
