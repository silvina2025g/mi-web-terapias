// Inicializar EmailJS
(function() {
    emailjs.init("J3J9v2cI65S3Cf1cT"); // reemplazá con tu clave pública
})();

// Manejador del formulario con EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_gi12iuq', 'template_eahe7m8', this)
        .then(function() {
            alert('✅ Mensaje enviado con éxito!');
        }, function(error) {
            alert('❌ Hubo un error: ' + JSON.stringify(error));
        });
});

// Smooth scroll para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
    }
  });
});
