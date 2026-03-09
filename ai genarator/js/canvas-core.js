const CanvasCore = {
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],

    addShape(type) {
        const canvas = document.getElementById('designCanvas');
        const content = document.getElementById('canvasContent');
        document.getElementById('emptyState').classList.add('hidden');

        const shape = document.createElement('div');
        shape.className = "shape shadow-2xl absolute cursor-move transition-colors duration-200";
        
        const size = 100;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;

        // Exact Centering Logic
        const x = (canvas.offsetWidth / 2) - (size / 2);
        const y = (canvas.offsetHeight / 2) - (size / 2);

        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;
        
        // Layering: Shapes stay above images
        shape.style.zIndex = "10";
        
        shape.style.backgroundColor = this.colors[0];
        shape.dataset.colorIdx = 0;
        
        if(type === 'circle') shape.style.borderRadius = "50%";

        shape.addEventListener('click', (e) => {
            e.stopPropagation();
            let idx = (parseInt(shape.dataset.colorIdx) + 1) % this.colors.length;
            shape.style.backgroundColor = this.colors[idx];
            shape.dataset.colorIdx = idx;
        });

        this.makeDraggable(shape);
        content.appendChild(shape);
    },

    makeDraggable(el) {
        let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
        el.onmousedown = (e) => {
            e.preventDefault();
            p3 = e.clientX; p4 = e.clientY;
            document.onmouseup = () => { document.onmouseup = null; document.onmousemove = null; };
            document.onmousemove = (e) => {
                p1 = p3 - e.clientX; p2 = p4 - e.clientY;
                p3 = e.clientX; p4 = e.clientY;
                el.style.top = (el.offsetTop - p2) + "px";
                el.style.left = (el.offsetLeft - p1) + "px";
            };
        };
    },
clearCanvas() {
        const content = document.getElementById('canvasContent');
        const emptyState = document.getElementById('emptyState');

        if (content.children.length === 0) return; // Nothing to clear

        if (confirm("Are you sure you want to clear the entire canvas?")) {
            // Remove all images and shapes
            content.innerHTML = '';
            
            // Show the 'Canvas is empty' message again
            if (emptyState) {
                emptyState.classList.remove('hidden');
            }
            
            this.selectedElement = null;
            console.log("Canvas cleared.");
        }
    },
    updateBg(c) { document.getElementById('designCanvas').style.backgroundColor = c; },
    updateRadius(r) { document.getElementById('designCanvas').style.borderRadius = r + "px"; }
};