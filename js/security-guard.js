// MATRIX HOUSING - نظام الرقابة والبودي جارد الذكي
// وظيفته: حماية عمولتك ومنع تبادل البيانات الشخصية في الشات

const forbiddenWords = [
    /[0-9]{11}/, // بيلقط أي رقم موبايل 11 رقم
    /واتس/g, /رقمي/g, /تليفون/g, /فون/g, /01/g,
    /زيرو/g, /عشرة/g, /كلمني/g, /تواصل/g, /فون/g,
    /رقم/g, /الرقم/g, /هاتفي/g, /واتساب/g
];

function matrixSecurityGuard(message) {
    let isViolation = false;
    let filteredMessage = message;

    forbiddenWords.forEach(pattern => {
        if (pattern.test(filteredMessage)) {
            // استبدال الكلمات المحظورة بنجوم أو رسالة تحذير
            filteredMessage = filteredMessage.replace(pattern, " [ممنوع تبادل بيانات الاتصال] ");
            isViolation = true;
        }
    });

    if (isViolation) {
        console.warn("Matrix Security: محاولة تبادل بيانات خارج المنصة!");
        // هنا السيستم بيمنع الرسالة تتبعت بشكلها الأصلي
    }
    
    return filteredMessage;
}

// تصدير الوظيفة لاستخدامها في ملف الشات لاحقاً
window.matrixSecurityGuard = matrixSecurityGuard;
