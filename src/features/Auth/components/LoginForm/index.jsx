import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';

const schema = yup.object({
    username: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    password: yup.string().required('Mật khẩu là bắt buộc').min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    defaultValues: PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string,
    }),
};

function LoginForm({ onSubmit, defaultValues }) {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        defaultValues: defaultValues || { username: '', password: '' },
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
                    error={!!errors.username}
                    helperText={errors.username?.message}
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

                <Typography mt={3} textAlign="center">
                    Bạn chưa có tài khoản? <Link to="/dang-ky">Đăng ký</Link>
                </Typography>
            </form>
        </Box>
    );
}

export default LoginForm;
