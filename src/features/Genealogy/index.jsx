import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenealogy, deleteGenealogy } from "@/features/Genealogy/genealogySlice";
import { Button } from "@mui/material";

function Genealogy() {
    const dispatch = useDispatch();

    const { items } = useSelector((state) => state.genealogy);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            dispatch(deleteGenealogy(id));
        }
    };

    const handleEdit = (row) => {
        // Ở đây bạn có thể mở modal hoặc form để chỉnh sửa
        // Ví dụ: mở modal với dữ liệu row
        console.log("Edit row:", row);
    };

    useEffect(() => {
        dispatch(getAllGenealogy());
    }, [dispatch]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="genealogy table">
                <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actione</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {items.map((row) => (
                        <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => handleEdit(row)}
                                    sx={{ mr: 1 }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => handleDelete(row.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Genealogy;