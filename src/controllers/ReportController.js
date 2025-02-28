import ReportService from '../services/reportService.js';

const ReportController = {
  async create(req, res) {
    try {
      const newReport = await ReportService.createReport(req.body);
      res.status(201).json({ code: 201, message: 'Report created successfully', data: newReport });
    } catch (error) {
      res.status(500).json({ code: 500, message: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const reports = await ReportService.getAllReports();
      res.json({ code: 200, message: 'Reports retrieved successfully', data: reports });
    } catch (error) {
      res.status(500).json({ code: 500, message: error.message });
    }
  },

  async getById(req, res) {
    try {
      const report = await ReportService.getReportById(parseInt(req.params.id));
      if (!report) return res.status(404).json({ code: 404, message: 'Report not found' });
      res.json({ code: 200, message: 'Report retrieved successfully', data: report });
    } catch (error) {
      res.status(500).json({ code: 500, message: error.message });
    }
  },

  async update(req, res) {
    try {
      const updatedReport = await ReportService.updateReport(parseInt(req.params.id), req.body);
      res.json({ code: 200, message: 'Report updated successfully', data: updatedReport });
    } catch (error) {
      res.status(500).json({ code: 500, message: error.message });
    }
  },

  async delete(req, res) {
    try {
      await ReportService.deleteReport(parseInt(req.params.id));
      res.json({ code: 200, message: 'Report deleted successfully' });
    } catch (error) {
      res.status(500).json({ code: 500, message: error.message });
    }
  },

  async updateStatus(req, res) {
    try {
      const updatedReport = await ReportService.updateReportStatus(parseInt(req.params.id), req.body.status);
      res.json({ code: 200, message: 'Report status updated successfully', data: updatedReport });
    } catch (error) {
      res.status(500).json({ code: 500, message: error.message });
    }
  },

  async getByPriority(req, res) {
    try {
      const reports = await ReportService.getReportsByPriority(req.params.priority);
      res.json({ code: 200, message: 'Reports retrieved successfully', data: reports });
    } catch (error) {
      res.status(500).json({ code: 500, message: error.message });
    }
  }
};

export default ReportController;
