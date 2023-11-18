import Categorie from "../models/projectCategorie.js";

export const createCategorie = async (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  try {
    let exitCat = await Categorie.findOne({ name });
    if (exitCat) {
      return res.json({
        errors: [
          {
            msg: "Donnée déja existant",
          },
        ],
        data: null,
      });
    }
    const createdCategorie = await Categorie.create({ name, image });

    res.json({
      error: [],
      data: {
        createdCategorie,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCategorie = async (req, res) => {
  try {
    const data = await Categorie.find();
    if (data) {
      return res.json({
        data: data,
      });
    }
    res.json({
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCategorie = async (req, res) => {
  try {
    let categorie = await Categorie.findById(req.params.id);
    if (!categorie) return res.status(404).json({ message: "pas de donneé" });

    const updatedCategorie = await Categorie.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedCategorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCategorie = async (req, res) => {
  try {
    let name = await Categorie.findById(req.params.id);
    if (!name) return res.status(404).json({ message: "Donnée inéxistant" });

    const deletedCategorie = await Categorie.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deletedCategorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
