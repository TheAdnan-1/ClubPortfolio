 // Hamburger and sidebar toggle with icon swap
            const hamburger = document.getElementById('navbarHamburger');
            const sidebar = document.getElementById('sidebar');
            const hamburgerIcon = document.getElementById('hamburgerIcon');
            const closeIcon = document.getElementById('closeIcon');

            function openSidebar() {
                sidebar.classList.add('active');
                hamburgerIcon.style.display = 'none';
                closeIcon.style.display = 'inline';
            }
            function closeSidebar() {
                sidebar.classList.remove('active');
                hamburgerIcon.style.display = 'inline';
                closeIcon.style.display = 'none';
            }
            hamburger.addEventListener('click', function(e) {
                if (sidebar.classList.contains('active')) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
            });
            closeIcon.addEventListener('click', function(e) {
                closeSidebar();
                e.stopPropagation();
            });
            // Close sidebar on link click (mobile UX)
            document.querySelectorAll('.sidebar-links a').forEach(link => {
                link.addEventListener('click', () => {
                    closeSidebar();
                });
            });
            // Hide sidebar and reset icons on resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 800) {
                    sidebar.classList.remove('active');
                    hamburgerIcon.style.display = 'inline';
                    closeIcon.style.display = 'none';
                }
            });