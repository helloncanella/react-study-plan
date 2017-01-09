import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <div>
		<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		      </button>
		      <a className="navbar-brand" href="#">Planos de Estudos Eleva</a>
		    </div>
		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav navbar-right">
		        <li><a href="#">Ver Grades Horárias</a></li>
		        <li><a href="#">Adicionar nova Grade</a></li>
		        <li><a href="#">Criar Plano de Estudo</a></li>
		      </ul>

		    </div>
		  </div>
		</nav>
	</div>
    );
  }
}

export default Header;