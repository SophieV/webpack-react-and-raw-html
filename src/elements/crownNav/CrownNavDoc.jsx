import React from 'react';
import ReactDOMServer from 'react-dom/server';

import beautify from 'js-beautify';

import CrownNav from './CrownNav.jsx';
import crownNavData from './data.json';

let beautifyHTML = require('js-beautify').html;


const CrownNavDoc = React.createClass({
  render: function() {
		let name = "Crown Nav";
    return (
			<div>
				<section className="hero">
					<div className="hero-content">
						<div className="container">
							<h1 className="title">
								{name}
							</h1>
							<h2 className="subtitle">
								Generated outputs
							</h2>
						</div>
					</div>
				</section>

				<div className="container">
					<section className="section">
			      <div className="heading">
			        <strong>
			          Live Example
			        </strong>
			      </div>
						<figure>
							{<CrownNav links={ crownNavData.links } />}
						</figure>
					</section>

					<section className="section">
						<div className="heading">
			        <strong>
			          Input
			        </strong>
			      </div>

						<figure>
							<div data-language-display="JSON">
								<code>
									<pre>
										{ beautify(JSON.stringify(crownNavData.links)) }
									</pre>
								</code>
							</div>
						</figure>

						<figure>
							<div data-language-display="React Markup">
								<code>
									<pre>
										{`<CrownNav links={ crownNavData.links } />`}
									</pre>
								</code>
							</div>
						</figure>

					</section>


					<section className="section">
						<div className="heading">
			        <strong>
			          Output
			        </strong>
			      </div>

						<figure>
							<div data-language-display="React HTML Markup">
								<code>
									<pre>
										{ beautifyHTML(ReactDOMServer.renderToString(<CrownNav links={crownNavData.links}/>)) }
									</pre>
								</code>
							</div>
						</figure>

						<figure>
							<div data-language-display="Plain HTML Markup">
								<code>
									<pre>
										{ beautifyHTML(ReactDOMServer.renderToStaticMarkup(<CrownNav links={crownNavData.links}/>)) }
									</pre>
								</code>
							</div>
						</figure>
					</section>
				</div>
			</div>
    );
  }
});

module.exports = CrownNavDoc;
