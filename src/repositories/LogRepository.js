import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const LogRepository = {
  // 📌 1. Menambahkan Log Baru
  async createLog(data) {
    return await prisma.log.create({
      data,
    });
  },

  // 📌 2. Mengambil Semua Log
  async getAllLogs(filter = {}) {
    return await prisma.log.findMany({
      where: filter,
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        report: {
          select: { id: true, title: true },
        },
      },
      orderBy: { timestamp: 'desc' },
    });
  },

  // 📌 3. Mengambil Log Berdasarkan ID
  async getLogById(logId) {
    return await prisma.log.findUnique({
      where: { id: logId },
      include: {
        user: { select: { id: true, name: true } },
        report: { select: { id: true, title: true } },
      },
    });
  },

  // 📌 4. Mengambil Log Berdasarkan Report ID
  async getLogsByReportId(reportId) {
    return await prisma.log.findMany({
      where: { reportId },
      include: {
        user: { select: { id: true, name: true } },
      },
      orderBy: { timestamp: 'desc' },
    });
  },
};

export default LogRepository;
