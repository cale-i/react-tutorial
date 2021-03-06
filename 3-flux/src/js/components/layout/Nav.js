import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			collapsed: true,
		};
	}
	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({ collapsed });
	}
	render() {
		const { location } = this.props;
		const { collapsed } = this.state;
		const featuredClass = location.pathname === "/" ? "active" : "";
		const favoritesClass =
			location.pathname === "/^/favorites/" ? "active" : "";
		const settingsClass = location.pathname === "/^/settings/" ? "active" : "";
		const navClass = collapsed ? "collapse" : "";

		return (
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button
							type="button"
							class="navbar-toggle"
							onClick={this.toggleCollapse.bind(this)}
						>
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div
						class={`navbar-collapse ${navClass}`}
						id="bs-example-navbar-collapse-1"
					>
						<ul class="nav navbar-nav">
							<li class={featuredClass}>
								<Link to="/" onClick={this.toggleCollapse.bind(this)}>
									Featured
								</Link>
							</li>
							<li class={favoritesClass}>
								<Link to="/favorites" onClick={this.toggleCollapse.bind(this)}>
									Favorites
								</Link>
							</li>
							<li class={settingsClass}>
								<Link to="/settings" onClick={this.toggleCollapse.bind(this)}>
									Settings
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
