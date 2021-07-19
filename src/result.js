import './App.css';
function Result(props) {
	
	return (
		<div className="table-view">
			<form>
				<h1 className='title'>View Data</h1>
				<table className='viewdata'>
					<tbody>
						<tr>
							<th key="0">Key</th>
							<th key="1">Value</th>
						</tr>

						{
							props.allProps.map((prop, i) => (

								(prop.name == 'Interests' && prop.value.length > 0) ?
									prop.value.map((propValue, j) => (
										
										<tr>
											<td key={i + j}>{propValue.name}</td>
											<td key={i + j}>{Math.round(propValue.value)}</td>
										</tr>
									)) :
									<tr>
										<td key={i}>{prop.name}</td>
										<td key={i}>{prop.value}</td>
									</tr>
							)
							)
						}

					</tbody>
				</table>


				<input type="button" className="submitStyle table-back-button button-enabled" onClick={props.onBackClick} value="Back to calculator" />
			</form>
		</div>

	)
}

export default Result;