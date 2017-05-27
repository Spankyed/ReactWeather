var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to test out..</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia</Link>
        </li>
        <li>
          <Link to='/?location=North_Augusta'>North Augusta</Link>
        </li>
        <li>
          <Link to='/?location=Boca_Raton'>Boca Raton</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
