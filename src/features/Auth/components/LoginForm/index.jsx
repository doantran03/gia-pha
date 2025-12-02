import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
    username: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    password: yup.string().required('Mật khẩu là bắt buộc').min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm({ onSubmit }) {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        defaultValues: { username: '', password: '' },
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = (values) => {
        if (onSubmit) onSubmit(values);
        reset();
    };

    return (
        <Box sx={{ maxWidth: 500, p: 5, backgroundColor: 'var(--clr-white)', mx: 'auto' }}>
            <Typography mb={1} textAlign="center">
                Đăng nhập để sử dụng dịch vụ
            </Typography>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <TextField
                    label="Email"
                    {...register('username')}
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoFocus
                />

                <TextField
                    label="Mật khẩu"
                    {...register('password')}
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />

                <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 2 }}>
                    Đăng nhập
                </Button>
            </form>
        </Box>
    );
}

export default LoginForm;
