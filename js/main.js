/****************************** functions ******************************/
const getNavbarLinks = () => {
  navbarLinks.push(new NavbarLink("Home", "/index.html"));
  navbarLinks.push(new NavbarLink("Quién Soy", "/pages/quien-soy.html"));
  navbarLinks.push(new NavbarLink("Tips", "/pages/tips.html"));
  navbarLinks.push(new NavbarLink("Programas", "/pages/programas.html"));
  navbarLinks.push(new NavbarLink("Agendá tu consulta", "#"));
};

const renderNavbar = () => {
  getNavbarLinks();
  let content = `
        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container-fluid position-relative">
                <a class="navbar-brand" href="/index.html"><img src="/img/common/logoMenu.png" alt="Logo Sobrenatural" height="50px" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">`;

  navbarLinks.forEach((x) => {
    content += `<li class="nav-item"><a class="nav-link px-3" href="${x.file}">${x.label}</a></li>`;
  });

  content += `    </ul>
                </div>
            </div>
        </nav>`;

  document.getElementsByTagName("header")[0].className = "sticky-top";
  document.getElementsByTagName("header")[0].innerHTML = content;
};

const renderFooter = () => {
  let content = `
    <div class="row pt-3">
    <div class="col-12 col-md-2">
      <h4 class="mt-2 mb-4">Sobre</h4>
      <p><a href="/pages/tips.html">Tips</a></p>
      <p><a href="/pages/programas.html">Programas</a></p>
      <p><a href="#">Consultas</a></p>
    </div>
    <hr class="d-md-none" />
    <div class="col-12 col-md-5">
      <h4 class="mt-2 mb-4">Contacto</h4>
      <p><i class="bi bi-geo-alt me-3"></i>xxxxxxxxxxxxxxxxxxxx</p>
      <p><i class="bi bi-phone me-3"></i>+54-351-873-2698</p>
      <p><i class="bi bi-envelope me-3"></i>xxxxxx@sobrenatural.com</p>
    </div>
    <hr class="d-md-none" />
    <div
      class="col-12 col-md-5 mt-2 mb-4 d-flex justify-content-md-end justify-content-center footer__redesSociales"
    >
      <a href="https://www.instagram.com/sobrenatural_diet/" target="_blank" aria-label="Instagram"
        ><i class="bi bi-instagram"></i
      ></a>
      <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
      <a href="#" aria-label="Youtube"><i class="bi bi-youtube"></i></a>
    </div>
  </div>`;

  document.getElementsByTagName("footer")[0].className = "container-fluid footer";
  document.getElementsByTagName("footer")[0].innerHTML = content;
};

const renderWhatsappIcon = () => {
  let content = `<a href="https://api.whatsapp.com/send/?phone=543518732698&text=Buenos+d%C3%ADas%21&type=phone_number&app_absent=0" target="_blank"><img src="/img/common/logo-whatsapp.png" alt="WhatsApp" /></a>`;
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

/****************************** main ******************************/
class NavbarLink {
  constructor(label, file) {
    this.label = label;
    this.file = file;
  }
}

const navbarLinks = [];
const year = new Date().getFullYear();

renderNavbar();
renderFooter();
renderWhatsappIcon();
//renderDates();

/*
const homeViajes = document.getElementById("homeViajes");
if (homeViajes !== null) {
  renderHomeViajes();
}

const viajesViajes = document.getElementById("viajesViajes");
if (viajesViajes !== null) {
  renderViajesViajes();
}
*/
