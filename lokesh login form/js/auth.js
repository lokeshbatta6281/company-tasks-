const Auth = {
    failedAttempts: {},

    register(name, email, password) {
        const users = Storage.get('users') || [];
        if (users.find(u => u.email === email)) {
            return { success: false, msg: "Email already registered!" };
        }
        const newUser = {
            id: 'USR-' + Date.now(),
            name,
            email,
            password: btoa(password), 
            createdAt: new Date().toISOString()
        };
        users.push(newUser);
        Storage.set('users', users);
        return { success: true, msg: "Registration successful!" };
    },

    login(email, password) {
        const users = Storage.get('users') || [];
        const user = users.find(u => u.email === email && atob(u.password) === password);

        if (user) {
            const session = { userId: user.id, expiry: Date.now() + 3600000 };
            Storage.set('session', session);
            return { success: true, user };
        } else {
            return { success: false, msg: "Invalid email or password." };
        }
    }
};

const AuthHandler = {
    init() {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        if(loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        if(signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignup();
            });
        }
    },

    handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPass').value;

        UI.setLoader(true);

        setTimeout(() => {
            try {
  
                const result = Auth.login(email, pass);

                if (result.success) {
                    window.location.href = 'dashboard.html';
                } else {
                    UI.setLoader(false); 
                    UI.showToast(result.msg, 'error');
                }
            } catch (err) {
                console.error(err);
                UI.setLoader(false);
                UI.showToast("System error. Check console.", "error");
            }
        }, 1000);
    },

    handleSignup() {
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPass').value;

        UI.setLoader(true);

        setTimeout(() => {
            try {
                const result = Auth.register(name, email, pass);
                UI.setLoader(false);
                if (result.success) {
                    UI.showToast(result.msg);
                    UI.switchTab('login');
                } else {
                    UI.showToast(result.msg, 'error');
                }
            } catch (err) {
                UI.setLoader(false);
                UI.showToast("Registration error.", "error");
            }
        }, 1000);
    }
};

AuthHandler.init();