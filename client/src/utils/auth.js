class Auth {
  getProfile() {
    const token = this.getToken();
    return this.decodeToken(token);
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }
  
  isTokenExpired(token) {
    const decoded = this.decodeToken(token);
    return decoded?.exp < Date.now() / 1000;
  } 

  getToken() {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/user');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }

  decodeToken(token) {
    if (!token) return null;
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    
    return decodedPayload;
  }
}

export default new Auth();