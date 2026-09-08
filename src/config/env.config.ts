import dotenv from 'dotenv';

// Nạp file .env ngay khi module này được import
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error('❌ LỖI RẤT LỚN: Chưa cấu hình GEMINI_API_KEY trong file .env!');
}

export const envConfig = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    geminiApiKey: apiKey || '',
    nodeEnv: process.env.NODE_ENV || 'development',
};