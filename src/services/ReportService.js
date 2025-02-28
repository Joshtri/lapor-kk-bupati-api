import ReportRepository from '../repositories/ReportRepository.js';

const ReportService = {
  async createReport(data) {
    return await ReportRepository.createReport(data);
  },

  async getAllReports(filter) {
    return await ReportRepository.getAllReports(filter);
  },

  async getReportById(reportId) {
    return await ReportRepository.getReportById(reportId);
  },

  async updateReport(reportId, updateData) {
    return await ReportRepository.updateReport(reportId, updateData);
  },

  async deleteReport(reportId) {
    return await ReportRepository.deleteReport(reportId);
  },

  async updateReportStatus(reportId, status) {
    return await ReportRepository.updateReportStatus(reportId, status);
  },

  async getReportsByPriority(priority) {
    return await ReportRepository.getReportsByPriority(priority);
  },
};

export default ReportService;
