import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

const schema = object({
  email: string().required('Email is required').email('Invalid email format'),
  username: string().required('User Name is required'),
  password: string().required('Password is required').min(6, 'Password must be at least 6 chars'),
});

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const form = useForm({
        defaultValues: {
            email: '',
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = ((values) => {
        const { onSubmit } = props;

        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    });

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2, }} >
            <Typography variant="h5" mb={2} textAlign="center">
                Register
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
                    label="Username"
                    {...form.register('username')}
                    error={!!form.formState.errors.username}
                    helperText={form.formState.errors.username?.message}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    type="password"
                    label="Password"
                    {...form.register('password')}
                    error={!!form.formState.errors.password}
                    helperText={form.formState.errors.password?.message}
                />

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                    Register
                </Button>
            </form>
        </Box>
    );
}

export default RegisterForm;