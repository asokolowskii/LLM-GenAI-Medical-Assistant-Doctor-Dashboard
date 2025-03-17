
import React, { useState } from 'react';

export default function DoctorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 to-white font-sans text-lg">

      {/* Sidebar */}
      <aside className={`bg-white shadow-xl w-80 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-80'} duration-300 rounded-tr-3xl rounded-br-3xl`}>
        <div className="flex justify-between items-center p-8 border-b border-gray-200">
          <h2 className="text-3xl font-extrabold text-blue-800 tracking-wide">Panel Lekarza</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-blue-600 text-3xl focus:outline-none hover:text-blue-800 transition-transform transform hover:scale-110">☰</button>
        </div>

        <nav className="p-8 space-y-6 text-gray-700 text-xl">
          <button className="w-full text-left px-6 py-4 rounded-xl hover:bg-gradient-to-r from-blue-100 to-blue-200 transition-all shadow-sm transform hover:scale-105">Panel Główny</button>
          <button className="w-full text-left px-6 py-4 rounded-xl hover:bg-gradient-to-r from-blue-100 to-blue-200 transition-all shadow-sm transform hover:scale-105">Lista Pacjentów</button>
          <button className="w-full text-left px-6 py-4 rounded-xl hover:bg-gradient-to-r from-blue-100 to-blue-200 transition-all shadow-sm transform hover:scale-105">Harmonogram</button>
          <button className="w-full text-left px-6 py-4 rounded-xl hover:bg-gradient-to-r from-blue-100 to-blue-200 transition-all shadow-sm transform hover:scale-105">E-Recepty i Skierowania</button>
          <button className="w-full text-left px-6 py-4 rounded-xl hover:bg-gradient-to-r from-blue-100 to-blue-200 transition-all shadow-sm transform hover:scale-105">AI Rekomendacje</button>
          <button className="w-full text-left px-6 py-4 rounded-xl hover:bg-gradient-to-r from-blue-100 to-blue-200 transition-all shadow-sm transform hover:scale-105">Badania Kliniczne (AI)</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="flex justify-between items-center p-8 bg-white shadow-lg text-xl rounded-bl-3xl">
          <div className="flex items-center gap-6">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-blue-600 text-3xl focus:outline-none md:hidden hover:text-blue-800 transition-transform transform hover:scale-110">☰</button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center text-2xl font-extrabold shadow-md">
                AI
              </div>
              <h1 className="text-2xl font-bold text-blue-800">Dzień dobry, dr Nowak</h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-3 bg-yellow-400 text-white px-6 py-3 rounded-xl hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-md text-lg">
              ❓ Pomoc
            </button>
            <button className="relative text-3xl text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110">
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm px-3 rounded-full shadow">3</span>
              🔔
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md text-lg">
              Wyloguj
            </button>
          </div>
        </header>

        {/* Content Sections */}
        <section className="flex-1 p-8 space-y-8 overflow-y-auto">

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-transform transform hover:scale-105">
              <h2 className="text-md text-gray-500">Pacjenci aktywni</h2>
              <p className="text-5xl font-extrabold text-blue-800 mt-2">128</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-transform transform hover:scale-105">
              <h2 className="text-md text-gray-500">Wizyty dzisiaj</h2>
              <p className="text-5xl font-extrabold text-blue-800 mt-2">12</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-transform transform hover:scale-105">
              <h2 className="text-md text-gray-500">Nowe rekomendacje AI</h2>
              <p className="text-5xl font-extrabold text-blue-800 mt-2">5</p>
            </div>
          </div>

          {/* Patient List */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-transform transform hover:scale-101">
            <h2 className="text-2xl font-extrabold text-blue-800 mb-6">Twoi Pacjenci</h2>
            <table className="w-full text-left border-collapse text-lg">
              <thead>
                <tr className="text-gray-600">
                  <th className="py-4 border-b">Imię i nazwisko</th>
                  <th className="py-4 border-b">Status leczenia</th>
                  <th className="py-4 border-b">Następna wizyta</th>
                  <th className="py-4 border-b">Akcje</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-transform transform hover:scale-101">
                  <td className="py-4 border-b">Jan Kowalski</td>
                  <td className="py-4 border-b text-green-600 font-semibold">W trakcie terapii</td>
                  <td className="py-4 border-b">22.03.2025</td>
                  <td className="py-4 border-b">
                    <button className="text-blue-600 hover:underline font-medium transition-transform transform hover:scale-105">Szczegóły</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-transform transform hover:scale-101">
                  <td className="py-4 border-b">Anna Nowak</td>
                  <td className="py-4 border-b text-red-600 font-semibold">Wymaga uwagi</td>
                  <td className="py-4 border-b">Brak</td>
                  <td className="py-4 border-b">
                    <button className="text-blue-600 hover:underline font-medium transition-transform transform hover:scale-105">Szczegóły</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* AI Copilot Recommendations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-transform transform hover:scale-101">
            <h2 className="text-2xl font-extrabold text-blue-800 mb-6">AI Copilot - Rekomendacje Leczenia</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Algorytm LLM sugeruje zmianę dawkowania leku Paclitaxel dla pacjenta Anna Nowak ze względu na wyniki badań.
            </p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 text-lg transition-transform transform hover:scale-105 shadow-md">
              Zastosuj rekomendację
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
