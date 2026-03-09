const Validation = {
    rules: {
        length: str => str.length >= 8,
        upper: str => /[A-Z]/.test(str),
        number: str => /[0-9]/.test(str),
        special: str => /[^A-Za-z0-9]/.test(str)
    },

    checkStrength(val) {
        let passed = 0;
        if (this.rules.length(val)) passed++;
        if (this.rules.upper(val) && this.rules.number(val)) passed++;
        if (this.rules.special(val)) passed++;

        for(let i=1; i<=3; i++) {
            const bar = document.getElementById(`s-${i}`);
            bar.className = 'strength-bar flex-1 rounded ' + 
                (passed >= i ? (passed === 1 ? 'bg-red-500' : passed === 2 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-slate-700');
        }

        const btn = document.getElementById('regBtn');
        if (passed === 3) {
            btn.disabled = false;
            btn.className = "w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all";
        } else {
            btn.disabled = true;
            btn.className = "w-full bg-slate-700 text-slate-400 py-4 rounded-xl font-bold cursor-not-allowed";
        }
    }
};