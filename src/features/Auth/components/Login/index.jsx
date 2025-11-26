import LoginForm from '../LoginForm';

Login.propTypes = {
    
};

function Login() {
    const handleSubmit = (values) => {
        console.log('Form Submit: ', values);
    }

    return (
        <LoginForm onSubmit={handleSubmit} />
    );
}

export default Login;
