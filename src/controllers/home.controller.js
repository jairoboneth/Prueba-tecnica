import apiData from "../helpers/api.helper.js";
import Contact from '../models/contact.model.js';
const homeController = {};

homeController.get = async (req, res) => {

    const da = await apiData;
    const map = new Map(Object.entries(da));
    const values = Array.from(map.values());
    console.log(values);
  res.render("index.ejs", { data: values });
};

homeController.post = async (req, res) => {

  const da = await apiData;
  const map = new Map(Object.entries(da));
  const values = Array.from(map.values());

  const contact = Contact(req.body);
  const contactSave =  await contact.save()
  
  console.log(contactSave);
  res.render("index.ejs", { data: values, mensajeExito: "Ha sido guardado exitosamente"});
};


export default homeController;
