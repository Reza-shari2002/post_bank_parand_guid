// Header.jsx
import { useEffect, useMemo, useState } from "react";
import postbanklogo from "../../assets/postbank.png"
function Header({ children }) {
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState(new Date());

  // ناوبری تک‌صفحه‌ای (آیتم‌ها حذف شدند طبق درخواست شما)
  // اگر بعداً خواستید، می‌تونیم فقط "مراحل" و "سوالات" رو برگردونیم.
  const nav = useMemo(() => [], []);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const timeText = useMemo(() => {
    try {
      return new Intl.DateTimeFormat("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(now);
    } catch {
      return now.toLocaleTimeString();
    }
  }, [now]);

  const dateText = useMemo(() => {
    try {
      return new Intl.DateTimeFormat("fa-IR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(now);
    } catch {
      return now.toLocaleDateString();
    }
  }, [now]);

  const scrollTo = (href) => (e) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <header
        dir="rtl"
        className="
          sticky top-0 z-50 w-full
          border-b border-slate-200/70 bg-white/80 backdrop-blur
          dark:border-slate-800/60 dark:bg-slate-950/70
        "
        style={{
          fontFamily:
            "Vazirmatn, IRANSansX, Dana, YekanBakh, system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          {/* برند */}
          <a
            href="#top"
            onClick={scrollTo("#top")}
            className="
              group inline-flex items-center gap-3 rounded-2xl
              px-2 py-1 transition
              hover:bg-slate-50 dark:hover:bg-slate-900/40
            "
          >
            <span
              className="
                grid h-16 w-16 place-items-center rounded-xl
                bg-gradient-to-br from-emerald-500 to-teal-500 text-white
                shadow-sm ring-1 ring-black/5
                transition
                group-hover:shadow-md group-hover:brightness-105
              "
              aria-hidden="true"
            >
              <img
                
             
                
                src={postbanklogo}
              >

              </img>
            </span>

            <div className="leading-tight">
              <div className="text-sm font-extrabold text-slate-900 dark:text-slate-50">
                افتتاح حساب پست‌بانک
              </div>

            </div>
          </a>

          {/* سمت چپ: ساعت/تاریخ + CTA + منوی موبایل */}
          <div className="flex items-center gap-2">
            {/* تاریخ/ساعت (دسکتاپ) */}
            <div
              className="
                hidden lg:flex flex-col items-end rounded-2xl
                border border-slate-200 bg-white/70 px-3 py-2
                text-xs text-slate-700 shadow-sm
                dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200
              "
              aria-label="تاریخ و ساعت"
            >
              <div className="font-extrabold tabular-nums">{timeText}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {dateText}
              </div>
            </div>

            {/* دکمه شروع افتتاح حساب (کنار تاریخ/ساعت) */}


            {/* منوی موبایل */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="
                inline-flex h-10 w-10 items-center justify-center rounded-2xl
                border border-slate-200 bg-white text-slate-700 shadow-sm
                transition
                hover:bg-slate-50
                md:hidden
                dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900
              "
              aria-label="باز و بسته کردن منو"
              aria-expanded={open}
            >
              {!open ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* پنل موبایل (بدون نوبار آیتم‌ها) */}
        <div className={open ? "md:hidden" : "hidden md:hidden"}>
          <div className="mx-auto max-w-7xl space-y-3 px-4 pb-4 sm:px-6 lg:px-8">
            {/* تاریخ/ساعت موبایل */}
            <div
              className="
                flex items-center justify-between rounded-3xl
                border border-slate-200 bg-white p-3 shadow-sm
                dark:border-slate-800 dark:bg-slate-950
              "
            >
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {dateText}
              </div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-slate-50 tabular-nums">
                {timeText}
              </div>
            </div>

            {/* فقط CTA در موبایل */}
            

            {/* نوار اطلاع کوتاه */}
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-100">
              <span className="font-extrabold">نکته:</span> برای تکمیل فرایند،
              اطلاعات هویتی و شماره تماس معتبر لازم است.
            </div>
          </div>
        </div>
      </header>

      <main id="top">{children}</main>
    </>
  );
}

export default Header;
