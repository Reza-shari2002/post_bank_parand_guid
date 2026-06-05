import { Link } from "react-router-dom";
import { 
  User, 
  Store, 
  ShoppingBag, 
  Utensils, 
  Stethoscope, 
  Crown, 
  Gem, 
  Bitcoin, 
  Backpack, 
  Sparkles, 
  Wrench, 
  Building2,
  Landmark // آیکون برای پست بانک
} from "lucide-react";

function Home_page() {
  const services = [
    { id: 1, title: "پست بانک", icon: <Landmark className="w-7 h-7 text-blue-600" />, path: "/", highlight: true },
    { id: 2, title: "غذا", icon: <Utensils className="w-7 h-7 text-orange-500" /> },
    { id: 3, title: "سوپرمارکت", icon: <ShoppingBag className="w-7 h-7 text-green-500" /> },
    { id: 4, title: "فروشگاه", icon: <Store className="w-7 h-7 text-red-500" /> },
    { id: 5, title: "پزشکی", icon: <Stethoscope className="w-7 h-7 text-rose-500" /> },
    { id: 6, title: "ویژه", icon: <Crown className="w-7 h-7 text-amber-500" /> },
    { id: 7, title: "رز طلایی", icon: <Gem className="w-7 h-7 text-yellow-500" /> },
    { id: 8, title: "سرمایه‌گذاری", icon: <Bitcoin className="w-7 h-7 text-orange-400" /> },
    { id: 9, title: "گردشگری", icon: <Backpack className="w-7 h-7 text-slate-500" /> },
    { id: 10, title: "زیبایی", icon: <Sparkles className="w-7 h-7 text-purple-500" /> },
    { id: 11, title: "خدماتی", icon: <Wrench className="w-7 h-7 text-cyan-500" /> },
    { id: 12, title: "سازمانی", icon: <Building2 className="w-7 h-7 text-blue-500" /> },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 pb-10" style={{ fontFamily: 'Vazirmatn, system-ui' }}>
      
      {/* هدر نارنجی رنگ طبق عکس */}
      <div className="bg-[#f39200] p-4 pb-12 rounded-b-[40px] flex justify-between items-center shadow-lg">
        <div className="bg-white/20 p-2 rounded-2xl">
          <User className="text-white w-8 h-8" />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-white font-black text-xl tracking-tighter">پرند</span>
          <span className="text-white/80 text-[10px]">سوپر اپلیکیشن بومی</span>
        </div>
      </div>

      {/* بخش خدمات (گرید) */}
      <div className="mx-4 -mt-8 bg-white rounded-[32px] p-6 shadow-xl border border-slate-100">
        <div className="grid grid-cols-4 gap-y-8 gap-x-2">
          {services.map((service) => (
            service.path ? (
              <Link key={service.id} to={service.path} className="flex flex-col items-center group transition-all active:scale-90">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-2 shadow-sm border border-slate-50 ${service.highlight ? 'bg-blue-50 ring-2 ring-blue-100' : 'bg-slate-50'}`}>
                  {service.icon}
                </div>
                <span className={`text-[11px] font-bold text-center whitespace-nowrap ${service.highlight ? 'text-blue-700' : 'text-slate-700'}`}>
                    {service.title}
                </span>
              </Link>
            ) : (
              <div key={service.id} className="flex flex-col items-center opacity-80">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-2 border border-slate-50">
                  {service.icon}
                </div>
                <span className="text-[11px] font-bold text-slate-700 text-center whitespace-nowrap">{service.title}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* بنر تبلیغاتی سوپرمارکت */}
      <div className="mx-4 mt-6">
        <div className="relative overflow-hidden rounded-[28px] bg-[#22c55e] h-44 flex items-center p-6 shadow-lg shadow-green-100">
            <div className="z-10 w-1/2">
                <h2 className="text-white text-2xl font-black mb-1">سوپرمارکت</h2>
                <p className="text-white/90 text-sm font-medium leading-tight">خرید راحت و آسان تحویل به‌موقع</p>
            </div>
            {/* تصویر چرخ خرید فرضی */}
            <div className="absolute left-[-20px] top-4 w-48 h-48 opacity-90 rotate-12">
                <ShoppingBag className="w-full h-full text-white/20" />
            </div>
        </div>
      </div>

      {/* بخش دسته‌بندی پایین (رستوران‌ها) */}
      <div className="mt-8 px-6">
        <h3 className="text-slate-800 font-bold mb-4 flex items-center gap-2">
            رستوران‌ها
        </h3>
        <div className="flex justify-between gap-3 overflow-x-auto pb-4 no-scrollbar">
            {['فست فود', 'صبحانه', 'ایرانی', 'دریایی'].map((cat, index) => (
                <div key={index} className="flex flex-col items-center min-w-[70px]">
                    <div className="w-16 h-16 rounded-full bg-slate-200 mb-2 border-2 border-white shadow-md overflow-hidden">
                        <img src={`https://picsum.photos/seed/${index+10}/100`} alt={cat} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600">{cat}</span>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
}

export default Home_page;
