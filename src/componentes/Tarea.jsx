import '../styles/Tarea.css'
export const Tarea = ({texto}) => {
	return (
		<div className="tarea-contendor">
			<div className="tarea-texto">
				{texto}
			</div>
			<div className="tarea-icono">
				Eliminar
			</div>

		</div>
	)
}