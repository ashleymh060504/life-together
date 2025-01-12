export const login = async (loginData) => {
  const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    };