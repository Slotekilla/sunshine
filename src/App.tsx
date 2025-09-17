import React from 'react';
import { Sun, Zap, Users, TrendingUp, Send, ArrowRight, Play, Target, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-2 rounded-lg shadow-lg">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Sunshine Squad
              </h1>
            </div>
            <a href="https://t.me/sunshinesquad777" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Join Us</span>
            </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Active Crypto Community
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Sunshine
              </span>
              <br />
              <span className="text-gray-800">Squad</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              No dumbing, just pure vibes and fun. If we make money - good. If we don't, who cares! 
              Join our energetic community where we stream together on pump.fun ☀️
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://pump.fun/profile/6LSsYNmEfbmwpcTtRSTptzQjD6Db3Mrrx4LwDVzHd2gb?tab=balances" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Stream</span>
            </a>
            <a href="https://t.me/sunshinesquad777" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Active Crypto Community
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Sunshine
              </span>
              <br />
              <span className="text-gray-800">Squad</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              No dumbing, just pure vibes and fun. If we make money - good. If we don't, who cares! 
              Join our energetic community where we stream together on pump.fun ☀️
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://pump.fun/profile/6LSsYNmEfbmwpcTtRSTptzQjD6Db3Mrrx4LwDVzHd2gb?tab=balances" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Stream</span>
            </a>
            <a href="https://t.me/sunshinesquad777" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">Loading...</div>
              <div className="text-gray-600 text-sm">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">24/7</div>
              <div className="text-gray-600 text-sm">Activity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">Live</div>
              <div className="text-gray-600 text-sm">Streaming</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">Incoming</div>
              <div className="text-gray-600 text-sm">Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            What we do in <span className="text-orange-500">Sunshine Squad</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-orange-200/50">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-lg w-fit mb-6">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Pump.fun Streaming</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch our live streams on pump.fun where we analyze the market in real-time, 
                find opportunities, and have fun together!
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-yellow-200/50">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-3 rounded-lg w-fit mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Community Trading</h3>
              <p className="text-gray-600 leading-relaxed">
                We trade together with pure vibes! Sometimes we win, sometimes we learn, 
                but we always have fun doing it as one squad!
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-blue-200/50">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-lg w-fit mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Market Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                We share our thoughts and vibes about the market. No pressure, 
                just good energy and fun discussions!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-1 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl p-12">
              <Sun className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Ready for pure vibes and fun?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our community for good vibes, fun streams, and zero pressure. 
                Money is just a bonus - the real treasure is the friends we make! ☀️
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://t.me/sunshinesquad777" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Join Telegram</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://pump.fun/profile/6LSsYNmEfbmwpcTtRSTptzQjD6Db3Mrrx4LwDVzHd2gb?tab=balances" target="_blank" rel="noopener noreferrer" className="border-2 border-orange-300 hover:border-orange-500 text-orange-600 hover:text-orange-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch pump.fun</span>
                </a>
              </div>
             <div className="mt-6">
               <a href="https://twitter.com/SunshineSquad77" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors">
                 <Twitter className="w-5 h-5" />
                 <span className="font-medium">Follow us @SunshineSquad77</span>
                 <ArrowRight className="w-4 h-4" />
               </a>
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-2 rounded-lg">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Sunshine Squad</span>
          </div>
          <p className="text-gray-400 mb-4">
            Pure vibes, zero pressure, maximum fun ☀️
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2025 Sunshine Squad</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;