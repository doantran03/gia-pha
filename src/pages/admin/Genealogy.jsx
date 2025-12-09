import { createGenealogy, updateGenealogy, deleteGenealogy } from "@/features/Genealogy/genealogySlice";
import AddIcon from '@mui/icons-material/Add';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Link from '@mui/material/Link';
import Swal from "sweetalert2";
import Typography from '@mui/material/Typography';
import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import GenealogyForm from '../../features/Genealogy/components/GenealogyForm';
import GenealogyList from '../../features/Genealogy/components/GenealogyList';

function Genealogy() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editData, setEditData] = useState(null);

    const handleClickOpen = () => {
        setIsEdit(false);
        setEditData(null);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = (item) => {
        setIsEdit(true);
        setEditData(item);
        setOpen(true);
    };

    const handleAddSubmit = async (values) => {
        try {
            const action = createGenealogy(values);
            const resultAction = await dispatch(action);
            const data = unwrapResult(resultAction);
            console.log("Genealogy: ", data);

            setOpen(false);
            toast.success("Thêm mới gia phả thành công!")
        } catch (error) {
            toast.error(error)
            console.log("Failed to add Genealogy: ", error);
        }
    }

    const handleUpdateSubmit = async (values) => {
        try {
            const payload = {
                id: values.id,
                data: {
                    name: values.name,
                    description: values.description,
                }
            };

            const action = updateGenealogy(payload);
            const resultAction = await dispatch(action);
            const data = unwrapResult(resultAction);
            console.log("Genealogy: ", data);

            setOpen(false);
            toast.success("Cập nhật gia phả thành công!");
        } catch (error) {
            toast.error(error)
            console.log("Failed to update Genealogy: ", error);
        }
    };

    const handleDeleteSubmit = async (values) => {
        Swal.fire({
            title: "Bạn có chắc chắn?",
            text: "Bạn sẽ không thể khôi phục lại dữ liệu này!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xoá ngay",
            cancelButtonText: "Hủy"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const action = deleteGenealogy(values.id);
                    const resultAction = await dispatch(action);
                    const data = unwrapResult(resultAction);

                    console.log("Genealogy Deleted: ", data);

                    setOpen(false);

                    Swal.fire({
                        title: "Đã xoá!",
                        text: "Gia phả đã được xoá thành công.",
                        icon: "success"
                    });

                } catch (error) {
                    console.log("Failed to delete Genealogy: ", error);

                    Swal.fire({
                        title: "Lỗi!",
                        text: "Xoá không thành công.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <>
            <div className='app-main__nav'>
                <h2>Danh sách gia phả</h2>

                <div role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            MUI
                        </Link>
                        <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                            Core
                        </Link>
                        <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
                    </Breadcrumbs>
                </div>
            </div>

            <div className='app-main__content'>
                <Button onClick={handleClickOpen} variant="contained" color="success" startIcon={<AddIcon />} sx={{ mb: 2 }}>Thêm cây gia phả mới</Button>
                <GenealogyList handleEdit={handleEdit} handleDelete={handleDeleteSubmit} />
            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogContent>
                    <GenealogyForm onSubmit={isEdit ? handleUpdateSubmit : handleAddSubmit} defaultValues={editData} isEdit={isEdit} />
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Genealogy;