import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { Link } from 'react-router-dom';

const schema = object({
  email: string().required('Email là bắt buộc').email('Email không hợp lệ'),
  password: string().required('Mật khẩu là bắt buộc').min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  confirmPassword: string().required('Vui lòng xác nhận mật khẩu của bạn').oneOf([ref('password')], 'Mật khẩu không khớp'),
});

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = ((values) => {
        const { onSubmit } = props;

        const payload = {
            username: values.email,
            email: values.email,
            password: values.password,
        };

        if (onSubmit) {
            onSubmit(payload);
        }

        form.reset();
    });

    return (
        <Box sx={{ maxWidth: 500, p: 5, backgroundColor: 'var(--clr-white)', mx: 'auto' }}>
            <Typography mb={1} textAlign="center">
                Đăng ký để sử dụng dịch vụ
            </Typography>

            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    {...form.register('email')}
                    error={!!form.formState.errors.email}
                    helperText={form.formState.errors.email?.message}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    type="password"
                    label="Mật khẩu"
                    {...form.register('password')}
                    error={!!form.formState.errors.password}
                    helperText={form.formState.errors.password?.message}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    type="password"
                    label="Xác nhận mật khẩu"
                    {...form.register('confirmPassword')}
                    error={!!form.formState.errors.confirmPassword}
                    helperText={form.formState.errors.confirmPassword?.message}
                />

                <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 2 }}>
                    Đăng ký
                </Button>

                <Typography mt={3} textAlign="center">
                    Bạn đã có tài khoản? <Link to="/dang-nhap">Đăng nhập</Link>
                </Typography>
            </form>
        </Box>
    );
}

export default RegisterForm;