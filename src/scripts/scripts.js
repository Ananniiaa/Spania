
    document.addEventListener("DOMContentLoaded", function() {
        const pages = document.querySelectorAll('.page');
        const navLinks = document.querySelectorAll('nav a');

        // Function to show a specific page and hide others
        function showPage(pageId){
            pages.forEach(page => {
                page.style.display = 'none';
            });
            const pageToShow = document.getElementById(pageId);
            console.log(pageToShow)

            if (pageToShow) {
                
                pageToShow.style.display = 'block';
            }
        }

        // Event listeners for navigation links
        navLinks.forEach(link => {
            console.log("yoyr");
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                const pageId = this.getAttribute('href').substring(1);
                console.log(pageId)
                showPage(pageId);
            });
        });

        // Function to initialize the page
        function init() {
            // Show the default page
            const defaultPageId = window.location.hash.substring(1) || 'home';
            showPage(defaultPageId);
        }

        // Initialize the page
        init();
    });

