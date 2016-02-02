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
			        <h2 className="subtitle">
			          Real Example
			        </h2>
			      </div>

						<figure>
							{<CrownNav links={ crownNavData.links } />}
						</figure>
					</section>


					<section className="section">
			      <div className="heading">
			        <h3 className="subtitle">React Markup</h3>
			      </div>
						<figure>
							<pre data-language="language-html">
								<code className="language-html">
									{`<CrownNav links={ crownNavData.links } />`}
								</code>
							</pre>
						</figure>
					</section>


					<section className="section">
			      <div className="heading">
			        <h3 className="subtitle">React HTML Markup</h3>
			      </div>

						<figure>
							<pre data-language="language-html">
								<code className="language-html">
									{ ReactDOMServer.renderToString(<CrownNav links={crownNavData.links}/>) }
								</code>
							</pre>
						</figure>
					</section>


					<section className="section">
			      <div className="heading">
			        <h3 className="subtitle">Plain HTML Markup</h3>
			      </div>

						<figure>
							<pre data-language="language-html">
								<code className="language-html">
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
