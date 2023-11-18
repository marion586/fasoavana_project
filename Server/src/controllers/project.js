import Project from "../models/project.js";

export const createProject = async (req, res) => {
  const project = new Project(req.body);

  try {
    const createdProject = await project.save();

    res.status(201).json({
      error: [],
      data: createdProject,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const data = await Project.find();
    return res.status(200).json({
      error: [],
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProjectById = async (req, res) => {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);
    if (!project)
      return res.status(404).json({ message: "donné n'est existe" });
    return res.status(200).json({
      error: [],
      data: project,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const data = await Project.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const updatedProject = await Project.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const data = await Project.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const deletedProject = await Project.deleteOne({ _id: req.params.id });
    return res.status(201).json(deletedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
