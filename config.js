module.exports = {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.JWT_SECRET || "cambia-esta-clave",
  EXPIRA_SEG: 8 * 60 * 60,
  // Tarifa inicial por hora o fracción (COP). Luego el ADMIN las edita desde la app.
  TARIFA_HORA: { CARRO: 2000, MOTO: 1000, OTRO: 500 },
};
