import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ReportRepository = {
  // 📌 1. Buat Pengaduan Baru
  async createReport(data) {
    return await prisma.report.create({
      data,
    });
  },

  // 📌 2. Ambil Semua Pengaduan (Dengan Filter Opsional)
  async getAllReports(filter = {}) {
    return await prisma.report.findMany({
      where: filter,
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        comments: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  // 📌 3. Ambil Detail Pengaduan Berdasarkan ID
  async getReportById(reportId) {
    return await prisma.report.findUnique({
      where: { id: reportId },
      include: {
        user: { select: { id: true, name: true, email: true } },
        comments: { include: { user: { select: { name: true } } } },
      },
    });
  },

  // 📌 4. Update Data Pengaduan
  async updateReport(reportId, updateData) {
    return await prisma.report.update({
      where: { id: reportId },
      data: updateData,
    });
  },

  // 📌 5. Hapus Pengaduan
  async deleteReport(reportId) {
    return await prisma.report.delete({
      where: { id: reportId },
    });
  },

  // 📌 6. Perbarui Status Pengaduan
  async updateReportStatus(reportId, status) {
    return await prisma.report.update({
      where: { id: reportId },
      data: { status },
    });
  },

  // 📌 7. Ambil Pengaduan berdasarkan Prioritas
  async getReportsByPriority(priorityLevel) {
    return await prisma.report.findMany({
      where: { priority: priorityLevel },
      orderBy: { createdAt: 'desc' },
    });
  },
};

export default ReportRepository;
