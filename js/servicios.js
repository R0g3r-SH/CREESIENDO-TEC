const myImage = document.getElementById("service-image");
const myText = document.getElementById("service-text");
const arrow = document.getElementById("my-arrow");
let newImage = [
    "images/voluntariado.jpg",
    "images/donativos-recurrentes.jpg",
    "images/donativos-especie.jpg",
    "images/campanas-educativas.jpg",
    "images/empresa.jpg",
];
let ob = ["aa", "bb", "cc", "dd", "ee"];
const mywin = document.getElementById("services-button-container");

//init this
var e = 0;
clicked(e);

function hide() {
    gsap.to(myText, {
        duration: 0,
        autoAlpha: 0,
        onComplete: show
    });
    gsap.to(myImage, {
        duration: 0,
        autoAlpha: 0,
        onComplete: show
    });
}

function show() {
    gsap.to(myText, {
        duration: 0.8,
        autoAlpha: 1
    });
    gsap.to(myImage, {
        duration: 0.8,
        autoAlpha: 1
    });
}

function clicked(e) {
    var roo = document.getElementById(ob[e]);
    var rect = roo.getBoundingClientRect();
    switch (e) {
        case 0:
            hide();
            TweenMax.to($(arrow), 0.5, {
                x: rect.x + roo.clientWidth / 2 - arrow.clientWidth / 2,
            });
            myImage.src = newImage[0];
            myText.innerHTML =
                "<h3>VOLUNTARIADO</h3><p class=med-text>Ser voluntario en Cruz Rosa significa donar desinteresadamente tu tiempo, trabajo y esfuerzo.</p>            <p class=med-text>Nuestro gran equipo de voluntariado se conforma por personas pro activas, con carisma, espíritu de servicio y empáticas que trabajan con amor y entrega, en beneficio de las mujeres diagnosticadas con cáncer.</p>            <p class=med-text>Si estas interesado en ayudar y ser parte de la causa, regístrate al correo electrónico o contáctanos.</p>            <p class=med-text>Correo: admonalbergue@cruzrosa.org.mx<br>            Asunto: Voluntariado_(TuNombre)<br>            Teléfonos: 81-9627-0128 / 81-9627-0129</p>";
            //console.log("The arrow position is: "+ rect.x);
            break;
        case 1:
            hide();
            TweenMax.to($(arrow), 0.5, {
                x: rect.x + roo.clientWidth / 2 - arrow.clientWidth / 2,
            });
            myImage.src = newImage[1];
            myText.innerHTML =
                "<h3>DONATIVOS RECURRENTES</h3><p class=med-text>Tú puedes cambiar la vida de mujeres con diagnóstico de cáncer, otorga un donativo recurrente para que ellas puedan beneficiarse con una atención integral: hospedaje, alimentación, apoyo psicológico, asesoría médica y nutricional y actividades recreativas, de integración y esparcimiento, durante 65 días (estancia promedio) en el albergue de CRUZ ROSA.</p>            <p class=med-text>Tu donativo puede ser mediante aportaciones mensuales o anuales desde $300, $500 o la cantidad que decidas donar para lograr acompañarlas durante su proceso oncológico.</p>    <p class=med-text>Correo: enlacesss1@cruzrosa.org.mx<br>            Asunto: BecaAsistencial_(TuNombre)<br>Teléfonos: 81-9627-0128 / 81-9627-0129</p>";
            //console.log("The arrow position is: "+ rect.x);
            break;
        case 2:
            hide();
            TweenMax.to($(arrow), 0.5, {
                x: rect.x + roo.clientWidth / 2 - arrow.clientWidth / 2,
            });
            myImage.src = newImage[2];
            myText.innerHTML =
                '<h3>DONATIVOS EN ESPECIE</h3><p class=med-text>Constantemente nos encontramos en la búsqueda de oportunidades que nos permitan brindar apoyo en albergue de CRUZ ROSA.</p>            <p class=med-text>Tú puedes ser parte de esta noble causa, realizando una colecta de donativos como  alimentos, medicamentos, prótesis, productos de limpieza y/o cualquier producto que pueda permitirnos seguir ayudando a la mujer con cáncer.</p>            <p class=med-text>Contar con la ayuda de estos artículos nos permite incrementar el número de apoyos a pacientes y sus acompañantes, ya que representan un egreso menos para la asociación, que se convierte en apoyo directo para ellas.</p>            <p class=med-text>¿Te gustaría realizar una colecta y apoyar a la causa? conoce que artículos son de necesidad para la atención de pacientes y cuidadores en Cruz Rosa.</p>   <!-- other ways to support -->  <a href=#! class="btn btn-pink btn-lg" data-bs-toggle=modal data-bs-target=#lista_productos>LISTA DE PRODUCTOS</a>                    </div>';
            //console.log("The arrow position is: "+ rect.x);
            break;
        case 3:
            hide();
            TweenMax.to($(arrow), 0.5, {
                x: rect.x + roo.clientWidth / 2 - arrow.clientWidth / 2,
            });
            myImage.src = newImage[3];
            myText.innerHTML =
                '<h3>CAMPAÑAS EDUCATIVAS</h3><p class=med-text>Como un compromiso con la población en general continuamos cumpliendo con nuestra misión de informar sobre la detección temprana del cáncer y la responsabilidad en el cuidado de la salud</p>            <p class=med-text>Contamos con servicios de conferencias y stands informativos acerca de la detección oportuna del cáncer, las cuales se imparten en instituciones educativas, de salud, empresas y organizaciones de orden público y privado, buscando llevar el mensaje de la responsabilidad en la salud a toda la comunidad.</p>            <p class=med-text>Las sesiones van acompañadas de exposiciones, folletos y modelos anatómicos del cáncer que facilitan la enseñanza-aprendizaje del asistente. Se incluye una máquina de palomitas para generar un estímulo agradable e interiorizar el mensaje de manera positiva, replicando lo aprendido en su entorno social, creando conciencia en sus familiares y generando hábitos saludables en sus vidas.</p>    <a href=#! class="btn btn-pink btn-lg" data-bs-toggle=modal data-bs-target=#cont_conferencias>PARA RESERVACIÓN</a>';
            //console.log("The arrow position is: "+ rect.x);
            break;
        case 4:
            hide();
            TweenMax.to($(arrow), 0.5, {
                x: rect.x + roo.clientWidth / 2 - arrow.clientWidth / 2,
            });
            myImage.src = newImage[4];
            myText.innerHTML =
                '<h3>¿ERES UNA EMPRESA?</h3><p class=med-text>Actualmente ser una empresa socialmente responsable es indispensable para la comunidad y el entorno de negocio.  Contamos con varias opciones que  permitirán a tu empresa adquirir un valor agregado y al mismo tiempo contribuir a una causa social.</p>            <p class=med-text>CRUZ ROSA tiene el compromiso, de brindar apoyo inmediato y de calidad alas mujeres diagnosticadas con cáncer, así como de fomentar el cuidado dela salud y la detección oportuna de todo tipo de cáncer. Por ello desarrollamos proyectos especiales hacia el interior de las empresas, para transmitir estos mensajes y apoyar a las empleadas que así lo requieran.</p>   <!-- other ways to support -->            <div class="subsection my-2">                <div class="col-12 text-center mx-auto">                    <h5 class=text-pink>OTRAS MANERAS DE APOYAR</h5>                    <a href=#! class="btn btn-pink" data-bs-toggle=modal data-bs-target=#promocionales>ARTÍCULOS PROMOCIONALES</a>                    <a href=#! class="btn btn-pink" data-bs-toggle=modal data-bs-target=#playeras>PLAYERAS CON CAUSA</a>                    <a href=#! class="btn btn-pink" data-bs-toggle=modal data-bs-target=#colectas>COLECTAS</a>                    <!--<a href=#! class="btn btn-pink" data-bs-toggle=modal data-bs-target=#conferencias>CONFERENCIAS</a>-->                </div>';
            //console.log("The arrow position is: "+ rect.x);
            break;
        default:
            hide();
            myImage.src = newImage[0];
            myText.innerHTML =
                '<h3>CAMPAÑAS EDUCATIVAS</h3><p class=med-text>Como un compromiso con la población en general continuamos cumpliendo con nuestra misión de informar sobre la detección temprana del cáncer y la responsabilidad en el cuidado de la salud</p>            <p class=med-text>Contamos con servicios de conferencias y stands informativos acerca de la detección oportuna del cáncer, las cuales se imparten en instituciones educativas, de salud, empresas y organizaciones de orden público y privado, buscando llevar el mensaje de la responsabilidad en la salud a toda la comunidad.</p>            <p class=med-text>Las sesiones van acompañadas de exposiciones, folletos y modelos anatómicos del cáncer que facilitan la enseñanza-aprendizaje del asistente. Se incluye una máquina de palomitas para generar un estímulo agradable e interiorizar el mensaje de manera positiva, replicando lo aprendido en su entorno social, creando conciencia en sus familiares y generando hábitos saludables en sus vidas.</p>            <a href=!# class="btn btn-pink btn-lg">DESCARGAR SOLICITUD</a>';
    }
}