const dataDoAniversario = new Date("Jan 05, 2025 19:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();
  const distaciaAteOEvento = timeStampDoAniversario - timeStampAtual;
  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distaciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor((distaciaAteOEvento % diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor(
    (distaciaAteOEvento % horaEmMs) / minutoEmMs
  );
  const segundosAteOEvento = Math.floor(
    (distaciaAteOEvento % minutoEmMs) / 1000
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);
