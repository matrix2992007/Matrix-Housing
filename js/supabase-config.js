// MATRIX HOUSING - ملف إعدادات الربط بقاعدة البيانات
// هذا الملف يربط الواجهة بالمخزن (Supabase)

const matrixConfig = {
    // الرابط الفريد لمشروعك على سوبابيس
    url: "https://djzhxuucnvhzfljnubh.supabase.co", 
    
    // مفتاح الأمان العام (Anon Key)
    // ملاحظة: تم استخدام مفتاح الـ anon فقط لأمانك
    key: "Sb_publishable_2jR9X7v0_Sv59JbfxB9hnA_Yw2zpyb4"
};

// تهيئة عميل سوبابيس (Supabase Client)
// ملاحظة: تأكد من استدعاء مكتبة supabase في ملف الـ HTML قبل هذا الملف
const matrix = supabase.createClient(matrixConfig.url, matrixConfig.key);

console.log("Matrix Platform: Connection established and secured.");
