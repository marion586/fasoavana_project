import Detail from "../models/detail.js";

export const createDetail = async (req, res) => {
  const detail = new Detail(req.body);

  try {
    const createdDetail = await detail.save();
    res.status(201).json({
      error: [],
      data: createdDetail,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getDetail = async (req, res) => {
  try {
    const data = await Detail.find();
    return res.status(200).json({
      error: [],
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
