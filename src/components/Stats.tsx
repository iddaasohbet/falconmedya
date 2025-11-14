"use client";

import { TrendingUp, Users, CheckCircle, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    number: "7/24",
    label: "Canlı Destek",
  },
  {
    icon: TrendingUp,
    number: "115+",
    label: "Günlük İşlem",
  },
  {
    icon: CheckCircle,
    number: "%80",
    label: "Başarı Oranı",
  },
  {
    icon: Users,
    number: "9654+",
    label: "Tamamlanan İşlem",
  },
];

export default function Stats() {
  return (
    <section id="istatistikler" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dijital Güvenlik Uzmanı{" "}
            <span className="text-blue-600">Falcon Media</span>
          </h2>
          <p className="text-xl text-gray-600">
            Instagram hesap kurtarma ve sosyal medya güvenliği hizmetlerinde başarı oranımız
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
