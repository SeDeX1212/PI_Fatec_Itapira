<script>
    document.addEventListener("DOMContentLoaded", function() {
        const inputs = document.querySelectorAll("input, button");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        });

        inputs.forEach(input => {
            observer.observe(input);
        });
    });
</script>
