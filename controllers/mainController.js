const path = require("path");

const mainController = {
  home: (req, res) => {
    res.render("home", { title: "Inicio" });
  },
  about: (req, res) => {
    res.render("about", { title: "Acerca de" });
  },
  contact: (req, res) => {
    res.render("contact", { title: "Contacto" });
  },
  service: (req, res) => {
    res.render("service", { title: "Servicio" });
  },

  // 👉 Esta es la nueva función
  submitContact: (req, res) => {
    const { name, email, message } = req.body;
  
    console.log("Formulario recibido:");
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", message);
  
    // Aquí, puedes renderizar una vista con los datos enviados
    res.render("contact", {
      title: "Gracias por contactarnos",
      name: name,
      email: email,
      message: message,
    });
  }
  
};

module.exports = mainController;
