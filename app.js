let recognition;
let reactor;

window.onload = function() {
  reactor = document.querySelector(".reactor");
  iniciarSistema();
};

function iniciarSistema() {
  const boot = document.getElementById("boot");
  boot.play();

  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.querySelector(".interface").classList.remove("hidden");
    falar("Sistema online. Aguardando comando.");
    iniciarReconhecimento();
  }, 2500);
}

function iniciarReconhecimento() {

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Seu navegador não suporta reconhecimento de voz.");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "pt-BR";
  recognition.continuous = true;

  recognition.onresult = (event) => {
    const fala = event.results[event.results.length - 1][0].transcript.toLowerCase();
    console.log("Você disse:", fala);

    pulsar();

    // Ativação principal
    if (fala.includes("assistente")) {
      falar("Sim chefe");
    }

    // Abrir apps
    if (fala.includes("abrir whatsapp")) {
      abrirApp("whatsapp");
    }

    if (fala.includes("abrir youtube")) {
      abrirApp("youtube");
    }

    // Modo conversacional simples
    if (fala.includes("quem é você")) {
      falar("Eu sou JARVIS, seu assistente pessoal.");
    }

    if (fala.includes("que horas são")) {
      const hora = new Date().toLocaleTimeString();
      falar("Agora são " + hora);
    }

    if (fala.includes("me motive")) {
      falar("Disciplina constrói impérios. Continue.");
    }
  };

  recognition.start();
}

/* Reator pulsando */

function pulsar() {
  reactor.classList.add("pulse");
  setTimeout(() => {
    reactor.classList.remove("pulse");
  }, 400);
}

function falar(texto) {
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "pt-BR";
  speechSynthesis.speak(voz);
}

function abrirApp(app) {
  if (app === "whatsapp") {
    window.location.href = "https://wa.me/";
  }

  if (app === "youtube") {
    window.location.href = "https://youtube.com";
  }
}
