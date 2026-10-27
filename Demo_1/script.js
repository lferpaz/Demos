// JavaScript para Landing Page ProA Arquitectura

document.addEventListener('DOMContentLoaded', () => {
    // Calculadora de Honorarios
    const superficieInput = document.getElementById('superficie');
    const m2Val = document.getElementById('m2-val');
    const tipoSelect = document.getElementById('tipo');
    const precioEstimado = document.getElementById('precio-estimado');

    function calcularPresupuesto() {
        const m2 = parseFloat(superficieInput.value);
        const tipo = tipoSelect.value;
        let tarifaBase = 25; // € por m2

        if (tipo === 'obra-nueva') {
            tarifaBase = 35;
        } else if (tipo === 'reforma') {
            tarifaBase = 25;
        } else if (tipo === 'interiorismo') {
            tarifaBase = 18;
        }

        const total = m2 * tarifaBase;
        m2Val.textContent = m2;
        precioEstimado.textContent = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(total);
    }

    if (superficieInput && tipoSelect) {
        superficieInput.addEventListener('input', calcularPresupuesto);
        tipoSelect.addEventListener('change', calcularPresupuesto);
        calcularPresupuesto();
    }

    // Filtrado de Portafolio
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Envío del Formulario (Simulación)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formMessage.style.color = '#16a34a';
            formMessage.textContent = '¡Gracias por contactar! Nos pondremos en contacto contigo en breve.';
            contactForm.reset();
        });
    }
});