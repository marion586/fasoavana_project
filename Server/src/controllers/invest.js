import Invest from "../models/Invest.js";

export const createInvest = async (req, res) => {
  const invest = new Invest(req.body);

  try {
    const createdInvest = await invest.save();
    res.status(201).json({
      error: [],
      data: createdInvest,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getInvest = async (req, res) => {
  try {
    const data = await Invest.find();
    return res.status(200).json({
      error: [],
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateInvest = async (req, res) => {
  try {
    const data = await Invest.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const updatedInvest = await Invest.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedInvest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getInvestById = async (req, res) => {
  const id = req.params.id;
  try {
    const invest = await Invest.findById(id);
    if (!project)
      return res.status(404).json({ message: "donné n'est existe" });
    return res.status(200).json({
      error: [],
      data: invest,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteInvest = async (req, res) => {
  try {
    const data = await Invest.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const deletedInvest = await Invest.deleteOne({ _id: req.params.id });
    return res.status(201).json(deletedInvest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
