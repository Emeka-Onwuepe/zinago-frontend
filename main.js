document.addEventListener('DOMContentLoaded', function () {
            var btn = document.getElementById('back-to-top');
            function toggleBtn() {
                if (window.scrollY > 300) btn.classList.add('show'); else btn.classList.remove('show');
            }
            window.addEventListener('scroll', toggleBtn, { passive: true });
            btn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            // initial check
            toggleBtn();
        });