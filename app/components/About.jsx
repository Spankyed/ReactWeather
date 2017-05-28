var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This application was built for learning purposes. </p>
      <p>Here are some tools used..</p>
      <ul>
        <li>
          <a href='https://nodejs.org'>Node</a> JavaScript runtime
        </li>
        <li>
          <a href='https://expressjs.com/'>Express</a> web application framework
        </li>
        <li>Facebook's
          <a href='https://facebook.github.io/react'> React</a> Framework
        </li>
        <li>
          <a href='https://foundation.zurb.com/'>Foundation</a> front-end framework
        </li>
        <li>Open Weather Map
          <a href='http://openweathermap.org/api'> API</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
