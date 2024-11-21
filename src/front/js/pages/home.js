import React, { useContext } from "react";
import { Context } from "../store/appContext";
import chemestryImage from "../../img/chemestry.jpeg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid text-center mt-5 align-items-center">
			<div
				className="bg-image d-flex flex-column justify-content-center align-items-center"
				style={{
					backgroundImage: `url(${chemestryImage})`,
					height: "100vh",
				}}>
				<h1 className="display-1 text-white bg-black">Bienvenidos</h1>
				<div className="d-inline-grid">
					<Link to="/signup">
					<button type="button" className="btn btn-light m-2">Registrarse</button>
					</Link>
				<Link to="/login">
					<button type="button" className="btn btn-light m-2">Ingresar</button>
					</Link>
				</div>
			</div>

		</div>
	);
};
