import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { useEffect } from 'react';

const schema = yup.object({
    name: yup.string().required('Tên gia phả là bắt buộc'),
});

GenealogyForm.propTypes = {
    onSubmit: PropTypes.func,
};

function GenealogyForm({ onSubmit, defaultValues, isEdit }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues || { name: "", description: "" }
    });

    const handleFormSubmit = (data) => {
        if (onSubmit) onSubmit(data);
        reset();
    };

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    return (
        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
            <Typography variant="h5" sx={{ mb: 1 }}>{isEdit ? 'Cập nhập giả phả' : 'Thêm gia phả' }</Typography>
            {/* Field Name */}
            <TextField
                label="Tên gia phả"
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                variant="outlined"
                margin="normal"
            />

            {/* Field Description */}
            <TextField
                label="Mô tả"
                {...register('description')}
                fullWidth
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button type="submit" variant="contained" color="success" startIcon={<SaveAsIcon fontSize="small" />}>
                    {isEdit ? 'Cập nhập' : 'Thêm mới' }
                </Button>
            </Box>
        </Box>
    );
}

export default GenealogyForm;
