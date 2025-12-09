import { getAllMemberByGenealogyId } from "@/features/Member/memberSlice";
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MemberTable() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const memberList = useSelector((state) => state.member.items);

    useEffect(() => {
        const getData = async () => {
            try {
                const action = getAllMemberByGenealogyId(id);
                const resultAction = await dispatch(action);

                const data = unwrapResult(resultAction);
                console.log("Member data: ", data);
            } catch (error) {
                console.error("Fetch Member failed: ", error);
            }
        };

        getData();
    }, [id, dispatch]);

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "fullname", headerName: "Họ tên", width: 200 },
        { field: "gender", headerName: "Giới tính", width: 100 },
        { field: "birth_date", headerName: "Ngày sinh", width: 130 },
        { field: "generation", headerName: "Đời", width: 80 },
        {
            field: "parents",
            headerName: "Cha mẹ",
            width: 200,
            valueGetter: (_, row) =>
                row.parents?.map((p) => p.title).join(", ") || "",
        },
        {
            field: "spouses",
            headerName: "Vợ/Chồng",
            width: 200,
            valueGetter: (_, row) =>
                row.spouses?.map((s) => s.title).join(", ") || "",
        },
    ];

    const paginationModel = { page: 0, pageSize: 10 };
    return (
            <Paper>
                <DataGrid
                    rows={memberList}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
    );
}

export default MemberTable;