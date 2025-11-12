const Application = require('../models/Application');

exports.getApplications = async (req, res) => {
  const apps = await Application.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(apps);
};

exports.createApplication = async (req, res) => {
  const app = await Application.create({ ...req.body, user: req.user._id });
  res.status(201).json(app);
};

exports.updateApplication = async (req, res) => {
  const app = await Application.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  if (!app) return res.status(404).json({ message: 'Application not found' });
  res.json(app);
};

exports.deleteApplication = async (req, res) => {
  const app = await Application.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id
  });
  if (!app) return res.status(404).json({ message: 'Application not found' });
  res.status(204).send();
};
