import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { boolean, object, string } from 'yup';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const schema = object({
        username: string().required('Username is required'),
        password: string().required('Password is required').min(6, 'Password must be at least 6 chars'),
        remember: boolean(),
    });

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
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 5,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2} textAlign="center">
        Login
      </Typography>

      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <TextField
          label="Username or Email Address"
          fullWidth
          margin="normal"
          {...form.register('username')}
          error={!!form.formState.errors.username}
          helperText={form.formState.errors.username?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...form.register('password')}
          error={!!form.formState.errors.password}
          helperText={form.formState.errors.password?.message}
        />

        <FormControlLabel
          control={
          <Checkbox
            {...form.register('remember')}
            color="primary"
            onChange={(e) => form.setValue('remember', e.target.checked)}
            />}
          label="Remember Me"
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
