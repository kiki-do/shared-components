import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 60 },
	{
		field: "firstName",
		headerName: "First name",
		width: 80,
		editable: true,
	},
	{
		field: "lastName",
		headerName: "Last name",
		width: 80,
		editable: true,
	},
	{
		field: "age",
		headerName: "Age",
		type: "number",
		width: 40,
		editable: true,
	},
	{
		field: "fullName",
		headerName: "Full name",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 150,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	},
];

const rows = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function TableComponent() {
	return (
		<div style={{ height: 400, width: 500, maxWidth: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
}
