import Material from "../models/material.js";

export const createMaterial = async (req, res) => {
  const material = new Material(req.body);

  try {
    const createdMaterial = await material.save();

    res.status(201).json({
      error: [],
      data: createdMaterial,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getMaterial = async (req, res) => {
  try {
    const data = await Material.find();
    return res.status(200).json({
      error: [],
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getMaterialById = async (req, res) => {
  const id = req.params.id;
  try {
    const material = await Material.findById(id);
    if (!material)
      return res.status(404).json({ message: "donné n'est existe" });
    return res.status(200).json({
      error: [],
      data: material,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMaterial = async (req, res) => {
  try {
    const data = await Material.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const updatedMaterial = await Material.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteMaterial = async (req, res) => {
  try {
    const data = await Material.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const deletedMaterial = await Material.deleteOne({ _id: req.params.id });
    return res.status(201).json(deletedMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
