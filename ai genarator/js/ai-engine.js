const AIEngine = {
    generate() {
        const promptInput = document.getElementById('aiPrompt');
        const rawPrompt = promptInput.value.trim().toLowerCase();
        const cleanPrompt = rawPrompt.replace(/\s+/g, ','); 
        
        if (!rawPrompt) return alert("Please type what you want to see (e.g., 'deep forest')");

        const btn = document.getElementById('genBtn');
        const text = document.getElementById('genText');
        const loader = document.getElementById('genLoader');

        text.classList.add('hidden');
        loader.classList.remove('hidden');
        btn.disabled = true;

        const canvasContent = document.getElementById('canvasContent');
        const imgContainer = document.createElement('div');
        
        // Added 'selectable-item' class to coordinate with CanvasCore selection logic
        imgContainer.className = "absolute cursor-move group shadow-xl selectable-item";
        imgContainer.style.width = "400px";
        imgContainer.style.top = "50px";
        imgContainer.style.left = "100px";
        imgContainer.style.zIndex = "5";

        const imgUrl = `https://loremflickr.com/800/600/${cleanPrompt}`;
        
        const newImg = new Image();
        newImg.crossOrigin = "anonymous"; 
        newImg.src = imgUrl;
        newImg.className = "w-full h-auto pointer-events-none";

        newImg.onload = () => {
            document.getElementById('emptyState').classList.add('hidden');
            imgContainer.innerHTML = ''; 
            imgContainer.appendChild(newImg);
            
            // --- EDIT & DELETE OVERLAY ---
            const controls = document.createElement('div');
            controls.className = "absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 p-1.5 rounded-lg backdrop-blur-sm shadow-lg";
            controls.innerHTML = `
                <button onclick="CanvasCore.editElement(this.parentElement.parentElement)" class="text-white hover:text-blue-400 p-1 px-2 transition-colors">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="CanvasCore.removeElement(this.parentElement.parentElement)" class="text-white hover:text-red-400 p-1 px-2 transition-colors">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            imgContainer.appendChild(controls);

            // Add selection border
            const border = document.createElement('div');
            border.className = "absolute inset-0 border-2 border-transparent group-hover:border-indigo-500 pointer-events-none transition-colors";
            imgContainer.appendChild(border);

            // Handle selection on click
            imgContainer.addEventListener('mousedown', () => {
                CanvasCore.selectElement(imgContainer);
            });

            CanvasCore.makeDraggable(imgContainer);
            canvasContent.appendChild(imgContainer);

            this.resetBtn(btn, text, loader);
        };

        newImg.onerror = () => {
            alert("Search failed. Try simpler keywords.");
            this.resetBtn(btn, text, loader);
        };
    },

    resetBtn(btn, text, loader) {
        text.classList.remove('hidden');
        loader.classList.add('hidden');
        btn.disabled = false;
    }
};