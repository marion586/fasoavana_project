import Boite from "../models/boite.js";

export const createBoite = async (req, res) => {
  const boite = new Boite(req.body);

  try {
    const createdBoite = await boite.save();

    res.status(201).json({
      error: [],
      data: createdBoite,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getBoite = async (req, res) => {
  try {
    const data = await Boite.find();
    return res.status(200).json({
      error: [],
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBoiteById = async (req, res) => {
  const id = req.params.id;
  try {
    const boite = await Boite.findById(id);
    if (!boite) return res.status(404).json({ message: "donné n'est existe" });
    return res.status(200).json({
      error: [],
      data: boite,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBoite = async (req, res) => {
  try {
    const data = await Boite.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const updatedBoite = await Boite.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedBoite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteBoite = async (req, res) => {
  try {
    const data = await Boite.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const deletedBoite = await Boite.deleteOne({ _id: req.params.id });
    return res.status(201).json(deletedBoite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
