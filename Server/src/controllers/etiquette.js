import Etiquette from "../models/etiquette.js";

export const createEtiquette = async (req, res) => {
  const etiquette = new Etiquette(req.body);

  try {
    const createdEtiquette = await etiquette.save();

    res.status(201).json({
      error: [],
      data: createdEtiquette,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getEtiquette = async (req, res) => {
  try {
    const data = await Etiquette.find();
    return res.status(200).json({
      error: [],
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getEtiquetteById = async (req, res) => {
  const id = req.params.id;
  try {
    const etiquette = await Etiquette.findById(id);
    if (!boite) return res.status(404).json({ message: "donné n'est existe" });
    return res.status(200).json({
      error: [],
      data: etiquette,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateEtiquette = async (req, res) => {
  try {
    const data = await Etiquette.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const updatedEtiquette = await Boite.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedEtiquette);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteEtiquette = async (req, res) => {
  try {
    const data = await Etiquette.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const deletedEtiquette = await Etiquette.deleteOne({ _id: req.params.id });
    return res.status(201).json(deletedEtiquette);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
