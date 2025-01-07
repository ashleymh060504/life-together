function Login () {
    return (
        <>
            <div>
                <h1>Login</h1>
                <form>
                    <label>
                    Username
                        <input type='text' />
                    </label>
                    <label>
                        Password
                        <input type='password' />
                    </label>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login