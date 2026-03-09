const Exporter = {
    async download() {
        const designCanvas = document.getElementById('designCanvas');
        // Targets the button with the specific text or class from your UI
        const downloadBtn = document.querySelector('button[onclick="Exporter.download()"]');
        
        if (!designCanvas) {
            console.error("Canvas element not found");
            return;
        }

        // 1. Visual feedback (Loading state)
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fas fa-spinner animate-spin mr-2"></i> EXPORTING...';
        downloadBtn.disabled = true;

        try {
            // Check if library is loaded
            if (typeof html2canvas !== 'undefined') {
                // 2. Capture the element
                const canvas = await html2canvas(designCanvas, {
                    // Use the background color from your styling sidebar
                    backgroundColor: designCanvas.style.backgroundColor || "#ffffff", 
                    scale: 2, // High definition
                    useCORS: true, // IMPORTANT: Allows the AI images to be included
                    allowTaint: false,
                    logging: false
                });
                
                // 3. Create a virtual link and click it to trigger download
                const link = document.createElement('a');
                link.download = `DesignFrame-${Date.now()}.png`;
                link.href = canvas.toDataURL("image/png");
                document.body.appendChild(link); // Required for some browsers
                link.click();
                document.body.removeChild(link);
                
            } else {
                alert("Critical: html2canvas library missing! Check your index.html head.");
            }
        } catch (error) {
            console.error("Export failed:", error);
            alert("Something went wrong while generating the image.");
        } finally {
            // 4. Reset button state
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        }
    }
};