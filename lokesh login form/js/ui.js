const UI = {
    setLoader(active) {
        const loader = document.getElementById('loader');
        if (loader) {
            if (active) {
                loader.classList.remove('hidden');
            } else {
                loader.classList.add('hidden');
            }
        }
    },


    switchTab(tab) {
        const isLogin = tab === 'login';
        document.getElementById('loginForm').classList.toggle('hidden-form', !isLogin);
        document.getElementById('signupForm').classList.toggle('hidden-form', isLogin);
        
        document.getElementById('tab-login').className = isLogin 
            ? 'flex-1 py-2 rounded-lg font-bold text-white bg-indigo-600' 
            : 'flex-1 py-2 rounded-lg font-bold text-slate-400 hover:text-white';
            
        document.getElementById('tab-signup').className = !isLogin 
            ? 'flex-1 py-2 rounded-lg font-bold text-white bg-indigo-600' 
            : 'flex-1 py-2 rounded-lg font-bold text-slate-400 hover:text-white';
    },

    togglePass(id) {
        const input = document.getElementById(id);
        const icon = input.nextElementSibling.nextElementSibling; 
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    },

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.innerText = message;
        toast.style.background = type === 'success' ? '#10b981' : '#ef4444';
        toast.classList.remove('translate-x-full');
        
        setTimeout(() => {
            toast.classList.add('translate-x-full');
        }, 3000);
    },

    
};