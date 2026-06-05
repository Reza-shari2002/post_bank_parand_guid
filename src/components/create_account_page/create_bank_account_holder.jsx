import { useState } from "react";
import bazaarLogo from "../../assets/bazaar-logo.svg";



function Create_bank_account_holder() {
  const [copied, setCopied] = useState(false);
  const authCode = "62458";


const handleCopy = async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      // روش جدید (برای HTTPS)
      await navigator.clipboard.writeText(authCode);
    } else {
      // روش جایگزین برای موبایل و HTTP
      const textArea = document.createElement("textarea");
      textArea.value = authCode;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);

    setTimeout(() => {
      window.scrollBy({ top: 320, behavior: "smooth" });
    }, 100);

  } catch (err) {
    console.error("خطا در کپی کردن کد:", err);
    alert("کپی انجام نشد، لطفاً دستی کپی کنید.");
  }
};


  return (
    <div
      dir="rtl"
      className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 dark:bg-slate-900"
      style={{ fontFamily: 'Vazirmatn, system-ui, sans-serif' }}
    >
      <div className="mx-auto max-w-3xl">
        
        {/* هدر صفحه */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            سامانه افتتاح حساب غیرحضوری
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
            آموزش افتتاح حساب پست‌بانک
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
            برای شروع، ابتدا کد دیجیتال زیر را کپی کنید.
          </p>
        </div>

        {/* بخش کپی کد (بخش اصلی) */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl md:p-10 dark:border-slate-800 dark:bg-slate-950">
          <div className="absolute top-0 right-0 h-1.5 w-full bg-gradient-to-l from-emerald-500 to-blue-500"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">کد دیجیتال (معرف)</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              این کد برای احراز هویت و اتصال حساب شما به سیستم الزامی است.
            </p>

            <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
              <div className="flex-1 flex items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/30 px-6 py-4 font-mono text-3xl font-black tracking-[0.2em] text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-950/20 dark:text-emerald-400">
                {authCode}
              </div>

              <button
                onClick={handleCopy}
                className={`flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white transition-all duration-300 shadow-lg ${
                  copied 
                  ? "bg-teal-600 scale-105" 
                  : "bg-emerald-600 hover:bg-emerald-700 active:scale-95"
                }`}
              >
                {copied ? (
                  <>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    کپی شد!
                  </>
                ) : (
                  "کپی کد"
                )}
              </button>
            </div>
            
            {!copied && (
              <p className="mt-4 animate-pulse text-xs font-medium text-amber-600">
                ⚠️ جهت مشاهده مراحل بعدی، ابتدا کد را کپی کنید.
              </p>
            )}
          </div>
        </div>

        {/* محتوای مخفی که بعد از کپی ظاهر می‌شود */}
        <div className={`transition-all duration-1000 ease-in-out ${
          copied ? "mt-12 opacity-100 translate-y-0" : "h-0 opacity-0 translate-y-10 overflow-hidden pointer-events-none"
        }`}>
          
          {/* گام دوم: دانلود از بازار */}
          <div className="mb-8 rounded-3xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/30 dark:bg-blue-950/20">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                ۲
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200">
                  دانلود و نصب نرم‌افزار «همپا»
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-800/80 dark:text-blue-300/80">
                  برای شروع افتتاح حساب، اپلیکیشن <strong>همپا (همراه بانک پست‌بانک)</strong> را از طریق لینک زیر در کافه‌بازار دانلود کنید:
                </p>
                
                <a
                  href="https://cafebazaar.ir/app/com.tosan.dara.postbank"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-3 rounded-xl bg-[#17823F] hover:bg-[#126631] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] active:scale-95"
                >
                  {/* لوگوی کافه‌بازار به‌صورت SVG خالص */}
                  <img className="h-10 w-16 shrink-0 fill-current" viewBox="0 0 50 50" src={bazaarLogo}>
                  </img>
                  دریافت مستقیم از کافه‌بازار
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* گام سوم و توضیحات نهایی */}
          <div className="space-y-6">
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800 font-bold dark:bg-slate-800 dark:text-slate-200">
                ۳
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">ثبت‌نام و وارد کردن کد</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  پس از نصب برنامه، وارد بخش <strong>«افتتاح حساب غیرحضوری»</strong> شوید. در مراحل ثبت‌نام، وقتی سیستم از شما <strong>کد شعبه یا کد دیجیتال</strong> خواست، کدی را که کپی کرده‌اید (۶۲۴۵۸) در آنجا جایگذاری (Paste) کنید.
                </p>
              </div>
            </div>

            {/* بخش هشدار مدارک */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 dark:border-amber-900/30 dark:bg-amber-950/20">
              <div className="flex gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h5 className="text-base font-bold text-amber-900 dark:text-amber-200">مدارک مورد نیاز:</h5>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-amber-800/90 dark:text-amber-300/80">
                    <li>اصل کارت ملی هوشمند (یا رسید ممهور ثبت‌نام)</li>
              
                    <li>سیم‌کارت فعال به نام شخص متقاضی</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* فوتر کوچک */}
          <p className="mt-12 text-center text-xs text-slate-400">
            تمامی حقوق این راهنما متعلق به واحد آموزش پست‌بانک می‌باشد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Create_bank_account_holder;
