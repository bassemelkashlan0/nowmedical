import Link from "next/link";
import { Logo } from "@/components/logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walk-In Clinic Calgary | Open 7 Days Until 11 PM",
  description: "Calgary's trusted walk-in clinic. Real doctors, open daily until 11 PM. Walk-ins welcome — no appointment needed.",
  keywords: ["walk-in clinic calgary", "walk in clinic near me", "open late medical clinic", "family doctor calgary", "clinic near me"],
};

const SMS_HREF = "sms:+18252109854";
const CALL_HREF = "tel:+15873918188";

function ContactButtons() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4">
      <Link
        href={SMS_HREF}
        className="flex w-full items-center justify-center rounded-lg border-2 border-[#299470] bg-[#299470] px-6 py-4 text-center text-xl font-bold text-white shadow-sm transition-colors hover:bg-[#2D7B6F] hover:border-[#2D7B6F]"
      >
        أرسل رسالة الآن
      </Link>
      <Link
        href={CALL_HREF}
        className="flex w-full max-w-[280px] items-center justify-center rounded-lg border-2 border-[#299470] bg-white px-6 py-3 text-center text-lg font-bold text-[#299470] shadow-sm transition-colors hover:bg-[#299470]/10"
      >
        اتصل بنا الآن
      </Link>
    </div>
  );
}

function ClinicVideo({ src, poster }: { src: string; poster: string }) {
  return (
    <div className="flex w-full max-w-md justify-center rounded-xl border border-[#83C1AC] bg-white p-2 shadow-sm">
      <video
        className="w-full rounded-lg bg-black"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        src={src}
      />
    </div>
  );
}

export default function ArabicPage() {
  return (
    <div className="min-h-screen bg-[#F1F9F4]" dir="rtl">
      <main className="mx-auto flex max-w-lg flex-col items-center px-6 py-10 text-center sm:py-14">
        <Logo className="mx-auto mb-8 h-auto w-[160px] sm:w-[180px]" />

        <h1 className="mb-5 text-3xl font-bold leading-snug text-[#299470] sm:text-4xl">
          عيادة كالجاري للزيارات الطبية
        </h1>

        <p className="mb-6 max-w-md text-lg font-medium leading-relaxed text-[#050505] sm:text-xl">
          مفتوح 7 أيام في الأسبوع حتى الساعة 11 مساءً بما في ذلك عطلات نهاية الأسبوع والعطلات الرسمية
        </p>

        <h2 className="mb-5 text-2xl font-bold text-[#299470] sm:text-3xl">
          أطباء و طبيبات يتحدثون العربية
        </h2>

        <p className="mb-10 text-xl font-bold text-[#303030] sm:text-2xl">أحجز موعد الآن</p>

        <div className="flex w-full flex-col items-center gap-12">
          <ContactButtons />
          <ClinicVideo src="/Amel.mp4" poster="/thumbnail1.png" />
          <ContactButtons />
          <ClinicVideo src="/Wael.mp4" poster="/thumbnail2.png" />
          <ContactButtons />
        </div>
      </main>
    </div>
  );
}
