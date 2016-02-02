import React from 'react';
import ReactDOMServer from 'react-dom/server';

import CrownNav from './CrownNav.jsx';
import crownNavData from './data.json';

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
			          Real Example
			        </strong>
			      </div>
						<figure>
							{<CrownNav links={ crownNavData.links } />}
						</figure>
					</section>
					<section className="section">
						<div className="heading">
			        <strong>
			          Markup
			        </strong>
			      </div>
						<figure>
							<pre data-language-display="React Markup">
								<code>
									{`<CrownNav links={ crownNavData.links } />`}
								</code>
							</pre>
						</figure>

						<figure>
							<pre data-language-display="React HTML Markup">
								<code>
									{ ReactDOMServer.renderToString(<CrownNav links={crownNavData.links}/>) }
								</code>
							</pre>
						</figure>

						<figure>
							<pre data-language-display="Outputted HTML Markup">
								<code>
									{ ReactDOMServer.renderToStaticMarkup(<CrownNav links={crownNavData.links}/>) }
								</code>
							</pre>
						</figure>
					</section>
				</div>
			</div>
    );
  }
});

module.exports = CrownNavDoc;
