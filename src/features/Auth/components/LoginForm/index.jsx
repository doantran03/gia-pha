import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { boolean, object, string } from 'yup';

const schema = object({
    username: string().required('Username is required'),
    password: string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    remember: boolean(),
});

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const form = useForm({
        defaultValues: {
        username: '',
        password: '',
        remember: false,
        },
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = (values) => {
        const { onSubmit } = props;

        if (onSubmit) {
        onSubmit(values);
        }

        form.reset();
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2, }} >
            <Typography variant="h5" mb={2} textAlign="center">
                Login
            </Typography>

            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Username or Email Address"
                    {...form.register('username')}
                    error={!!form.formState.errors.username}
                    helperText={form.formState.errors.username?.message}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    {...form.register('password')}
                    error={!!form.formState.errors.password}
                    helperText={form.formState.errors.password?.message}
                />

                <FormControlLabel
                    label="Remember Me"
                    control={
                        <Checkbox
                        color="primary"
                            {...form.register('remember')}
                            onChange={(e) => form.setValue('remember', e.target.checked)}
                        />
                    }
                />

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                    Login
                </Button>
            </form>
        </Box>
    );
}

export default LoginForm;
