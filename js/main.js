/****************************** functions ******************************/
const getNavbarLinks = () => {
  navbarLinks.push(new NavbarLink("Home", "./index.html", "../index.html"));
  navbarLinks.push(new NavbarLink("Quién Soy", "./pages/quien-soy.html", "./quien-soy.html"));
  navbarLinks.push(new NavbarLink("Tips", "./pages/tips.html", "./tips.html"));
  navbarLinks.push(new NavbarLink("Programas", "./pages/programas.html", "./programas.html"));
  navbarLinks.push(new NavbarLink("Agendá tu consulta", "./pages/contacto.html", "./contacto.html"));
};

const renderNavbar = (isIndex) => {
  getNavbarLinks();
  let content = `
        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container-fluid position-relative">
                <a class="navbar-brand" href="${
                  isIndex ? navbarLinks[0].fileIndex : navbarLinks[0].fileOther
                }"><img src="${
    isIndex ? "./img/common/logoMenuWhite.png" : "../img/common/logoMenuWhite.png"
  }" alt="Logo Sobrenatural" height="50px" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">`;
  if (isIndex) {
    navbarLinks.forEach((x) => {
      content += `<li class="nav-item"><a class="nav-link px-3" href="${x.fileIndex}">${x.label}</a></li>`;
    });
  } else {
    navbarLinks.forEach((x) => {
      content += `<li class="nav-item"><a class="nav-link px-3" href="${x.fileOther}">${x.label}</a></li>`;
    });
  }

  content += `    </ul>
                </div>
            </div>
        </nav>`;

  document.getElementsByTagName("header")[0].className = "sticky-top";
  document.getElementsByTagName("header")[0].innerHTML = content;
};

const renderFooter = (isIndex) => {
  let content = `
        <div class="footer__logo">
          <img src="${isIndex ? "./img/common/logoFooterWhite.png" : "../img/common/logoFooterWhite.png"}" alt="Logo" />
        </div>
        <hr class="mt-3 d-md-none" />
        <div class="footer__contacto">
          <h4>Contacto</h4>
          <p><i class="bi bi-geo-alt me-3 text-color-2"></i>Córdoba, Argentina</p>
          <p><i class="bi bi-phone me-3 text-color-2"></i>+54-351-873-2698</p>
          <p><i class="bi bi-envelope me-3 text-color-2"></i>productos.sobrenatural@gmail.com</p>
        </div>
        <hr class="mt-3 d-md-none" />
        <div class="footer__redesSociales">
          <h4>Redes sociales</h4>
          <a
            href="https://www.facebook.com/profile.php?id=100066952421668&mibextid=ZbWKwL"
            target="_blank"
            aria-label="Facebook"
            ><i class="bi bi-facebook"></i
          ></a>
          <a href="https://www.instagram.com/sobrenatural_diet/" target="_blank" aria-label="Instagram"
            ><i class="bi bi-instagram"></i
          ></a>
        </div>`;

  document.getElementsByTagName("footer")[0].className = "container-fluid footer";
  document.getElementsByTagName("footer")[0].innerHTML = content;
};

const renderWhatsappIcon = (isIndex) => {
  let content = `<a href="https://api.whatsapp.com/send/?phone=543518732698&text=Hola%20Ver%C3%B3nica%20%C2%BFc%C3%B3mo%20est%C3%A1s?%20Me%20interesa%20tener%20una%20consulta%20con%20vos%20%C2%BFme%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%20por%20favor?%20Gracias.&type=phone_number&app_absent=0" target="_blank"><img src="${
    isIndex ? "./img/common/logo-whatsapp.png" : "../img/common/logo-whatsapp.png"
  }" alt="WhatsApp" /></a>`;

  document.getElementById("whatsapp").innerHTML = content;
};

const renderDates = () => {
  let element = document.getElementsByClassName("currentYear");
  if (element.length > 0) {
    for (let i = 0; i < element.length; i++) {
      element[i].innerHTML = year;
    }
  }
};

const getContentProgram = (idPrograma) => {
  let content = "";
  switch (idPrograma) {
    case 1:
      content = `
        <div class="row justify-content-center my-5 flex-column-reverse flex-md-row">
          <div class="col-md-6 mt-5 mt-md-0">
            <img
              src="../img/programas/detalleProgramaCreaccion.jpg"
              alt="Programa creaccion"
              class="detailProgramas__img"
            />
          </div>
          <div class="col-md-6">
            <div class="detailProgramas__content" style="background: rgba(244, 144, 22, 0.62)">
              <h2>Creacción</h2>
              <p class="detailProgramas__content--ts">Modalidad presencial / online</p>
              <p>
                Es un programa grupal que tiene la finalidad de brindarle a las personas herramientas sencillas que les
                permite adquirir la capacidad de tomar sus propias decisiones en relación a su alimentación. Se busca
                propiciar un ambiente de reflexión y descubrimiento en lo referido a la alimentación.
              </p>
              <h3>Contenidos</h3>
              <p>¿Cuál es la importancia de valorar la calidad de nuestra alimentación?</p>
              <p>Sistema NOVA</p>
              <p>Hambres</p>
              <p>Infaltables de una alimentación real</p>
              <p>Momentos de las comidas</p>
              <p>¿Cómo armo mi plato?</p>
              <p class="detailProgramas__content--ts"><b>- Consultar precio y disponibilidad -</b></p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mb-5">
          <button onclick="goToProgram(0);" class="btn btn-primary">Volver</button>
        </div>`;
      break;

    case 2:
      content = `
        <div class="row justify-content-center my-5 flex-column-reverse flex-md-row">
          <div class="col-md-6 mt-5 mt-md-0">
            <img
              src="../img/programas/detalleProgramaCaminatasNutrituvas.jpg"
              alt="Programa caminatas nutritivas"
              class="detailProgramas__img"
            />
          </div>
          <div class="col-md-6">
            <div class="detailProgramas__content" style="background: rgba(108, 88, 90, 0.62)">
              <h2>Caminatas Nutritivas</h2>
              <p class="detailProgramas__content--ts">Modalidad presencial</p>
              <p>
                Te proponemos una experiencia para distenderte, relajarte con una caminata urbana y aprender
                herramientas que te ayuden a mejorar tu alimentación y a sentirte con más energía.
              </p>
              <h3>Contenidos</h3>
              <p>¿Cuál es la importancia de valorar la calidad de nuestra alimentación?</p>
              <p>Sistema NOVA</p>
              <p>Hambres</p>
              <p>Infaltables de una alimentación real</p>
              <p>Momentos de las comidas</p>
              <p>¿Cómo armo mi plato?</p>
              <p class="detailProgramas__content--ts"><b>- Consultar precio y disponibilidad -</b></p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mb-5">
          <button onclick="goToProgram(0);" class="btn btn-primary">Volver</button>
        </div>`;
      break;

    case 3:
      content = `
        <div class="row justify-content-center my-5 flex-column-reverse flex-md-row">
          <div class="col-md-6 mt-5 mt-md-0">
            <img
              src="../img/programas/detalleProgramaNutrinfancias.jpg"
              alt="Programa nutrinfancias"
              class="detailProgramas__img"
            />
          </div>
          <div class="col-md-6">
            <div class="detailProgramas__content" style="background: rgba(148, 170, 106, 0.62)">
              <h2>Nutrinfancias</h2>
              <p class="detailProgramas__content--ts">Modalidad presencial</p>
              <p>
                Los primeros años de vida son los más importantes para establecer y fomentar una alimentación real y una
                relación sana con la comida es por ese motivo que te proponemos ayudarte brindando talleres de educación
                alimentaria en tu escuela o club deportivo.
              </p>
              <p>
                Te ayudamos a que los niños puedan valorar la alimentación como un piular fundamental en la promoción da
                la salud.
              </p>
              <p class="detailProgramas__content--ts"><b>- Consultar precio y disponibilidad -</b></p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mb-5">
          <button onclick="goToProgram(0);" class="btn btn-primary">Volver</button>
        </div>`;
      break;

    case 4:
      content = `
      <div class="row justify-content-center my-5 flex-column-reverse flex-md-row">
        <div class="col-md-6 mt-5 mt-md-0">
          <img
            src="../img/programas/detalleProgramaNutrirte.jpg"
            alt="Programa nutrirte"
            class="detailProgramas__img"
          />
        </div>
        <div class="col-md-6">
          <div class="detailProgramas__content" style="background: rgba(186, 55, 1, 0.62)">
            <h2>Nutrirte</h2>
            <p class="detailProgramas__content--ts">Modalidad presencial individual</p>
            <p>Si tu objetivo es sentirte con mayor vitalidad y menos estrés, este programa es para vos.</p>
            <p>Te acompañamos en tu camino de mejora en la alimentación, vos podes lograr excelentes resultados.</p>
            <h3>Contenidos</h3>
            <p>Te acompañamos con sesiones teórico-prácticas para avanzar en tu rpoceso.</p>
            <p>¿Cuál es la importancia de valorar la calidad de nuestra alimentación?</p>
            <p>Sistema NOVA</p>
            <p>Hambres</p>
            <p>Infaltables de una alimentación real</p>
            <p>Momentos de las comidas</p>
            <p>¿Cómo armo mi plato?</p>
            <p class="detailProgramas__content--ts"><b>- Consultar precio y disponibilidad -</b></p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mb-5">
        <button onclick="goToProgram(0);" class="btn btn-primary">Volver</button>
      </div>`;
      break;

    case 5:
      content = `
        <div class="row justify-content-center my-5 flex-column-reverse flex-md-row">
          <div class="col-md-6 mt-5 mt-md-0">
            <img
              src="../img/programas/detalleProgramaNutriendoExperiencias.jpg"
              alt="Programa nutriendo experiencias"
              class="detailProgramas__img"
            />
          </div>
          <div class="col-md-6">
            <div class="detailProgramas__content" style="background: rgba(81, 93, 9, 0.6)">
              <h2>Nutriendo Experiencias</h2>
              <p class="detailProgramas__content--ts">Modalidad presencial</p>
              <p>Es hora de que la nutrición salga del consultorio y el hospital.</p>
              <p>
                Te ofrecemos una experiencia que te ayude a redescubrir la alimentación real como un pilar fundamental
                para crear salud y bienestar.
              </p>
              <p class="detailProgramas__content--ts"><b>- Consultar precio y disponibilidad -</b></p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mb-5">
          <button onclick="goToProgram(0);" class="btn btn-primary">Volver</button>
        </div>`;
      break;
  }

  return content;
};

const goToProgram = (idPrograma) => {
  let content = "";
  const mainProgramas = document.getElementById("mainProgramas");
  const detailProgramas = document.getElementById("detailProgramas");

  if (idPrograma != 0) {
    detailProgramas.innerHTML = getContentProgram(idPrograma);
    detailProgramas.classList.remove("d-none");
    mainProgramas.classList.add("d-none");
    document.documentElement.scrollTop = 0;
  } else {
    mainProgramas.classList.remove("d-none");
    detailProgramas.classList.add("d-none");
    document.documentElement.scrollTop = 450;
  }
};

/****************************** main ******************************/
class NavbarLink {
  constructor(label, fileIndex, fileOther) {
    this.label = label;
    this.fileIndex = fileIndex;
    this.fileOther = fileOther;
  }
}

const navbarLinks = [];
const year = new Date().getFullYear();

const isIndex = document.getElementById("index");
const confIsIndex = isIndex !== null;

renderNavbar(confIsIndex);
renderFooter(confIsIndex);
renderWhatsappIcon(confIsIndex);
//renderDates();
