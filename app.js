let recognition;

function iniciar() {

  const beep = document.getElementById("beep");
  beep.play();

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();

  recognition.lang = "pt-BR";
  recognition.continuous = true;

  recognition.onresult = (event) => {
    const fala = event.results[event.results.length - 1][0].transcript.toLowerCase();
    console.log("Você disse:", fala);

    if (fala.includes("assistente")) {
      ativarJarvis();
    }

    if (fala.includes("abrir whatsapp")) {
      abrirApp("whatsapp");
    }

    if (fala.includes("abrir youtube")) {
      abrirApp("youtube");
    }
  };

  recognition.start();
}

function ativarJarvis() {
  falar("Sim chefe");
  document.getElementById("central").style.display = "block";
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
