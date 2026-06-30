document.getElementById("requestForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const dati = new FormData(form);

  dati.append("_subject", "Nuova richiesta da Al tuo fianco Sulcis");
  dati.append("_captcha", "false");

  try {
    await fetch("https://formsubmit.co/ajax/altuofianco@outlook.com", {
      method: "POST",
      body: dati
    });

    alert("Richiesta inviata correttamente. Ti ricontatteremo al più presto.");
    form.reset();

  } catch (error) {
    alert("Errore nell'invio. Puoi contattarci telefonicamente o via email.");
    window.location.href = "mailto:altuofianco@outlook.com";
  }
});
