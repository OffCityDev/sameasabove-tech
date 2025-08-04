import Link from "next/link"
import Image from "next/image"
import { Palette, Code, Music, Gamepad2, Zap, Cpu, Wifi, Settings, Snowflake } from "lucide-react"
import { Building2 } from "lucide-react"

const apps = [
  { id: 1, name: "Off City", icon: Building2, href: "/off-city" },
  { id: 2, name: "Code Lab", icon: Code, href: "#" },
  { id: 3, name: "OffCityDev: Github", icon: Code, href: "https://github.com/OffCityDev" },
  { id: 4, name: "Website Settings", icon: Cpu, href: "#" },
  { id: 5, name: "sameasabove.co", icon: Snowflake, href: "https://sameasabove.bigcartel.com/products" },
  { id: 6, name: "ExampleApp1", icon: Zap, href: "#" },
  { id: 7, name: "ExampleApp2", icon: Zap, href: "#" },
  { id: 8, name: "addiciting casino game", icon: Gamepad2, href: "#" },
  { id: 9, name: "Sweet Nothings", icon: Music, href: "https://music.youtube.com/playlist?list=OLAK5uy_lVyJ7r_vRbmm1HJrOBbPK5tsIuRI1huEE&si=HFz_DGgarcezS4cz" },
  { id: 10, name: "Website Chatbot", icon: Cpu, href: "#" },
  { id: 11, name: "Network", icon: Wifi, href: "#" },
  { id: 12, name: "Sweet Nothings", icon: Music, href: "#" },
  { id: 13, name: "ExampleApp1", icon: Zap, href: "#" },
  { id: 14, name: "ExampleApp2", icon: Building2, href: "#" },
  { id: 15, name: "ExampleApp3", icon: Building2, href: "#" },
  { id: 16, name: "ExampleApp5", icon: Building2, href: "#" },
  { id: 17, name: "ExampleApp8", icon: Building2, href: "#" },
  { id: 18, name: "Settings", icon: Settings, href: "#" },
  { id: 19, name: "ExampleApp13", icon: Building2, href: "#" },
  { id: 20, name: "ExampleApp21", icon: Settings, href: "#" },
  { id: 21, name: "ExampleApp34", icon: Building2, href: "#" },
]

// Arrange apps in honeycomb rows, uncomment the next lines to use all apps
const honeycombRows = [
  apps.slice(0, 4), // First row: 4 hexagons
  apps.slice(4, 7), // Second row: 3 hexagons (offset)
  apps.slice(7, 11), // Third row: 4 hexagons
  apps.slice(11, 14), // Fourth row: 4 hexagons (offset)
  // apps.slice(14, 18), // Fifth row: 4 hexagons (offset)
  // apps.slice(18, 21), // Sixth row: 3 hexagons (offset)
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(30,58,138,0.1),transparent_50%)]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-ping"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-ping"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50 animate-ping"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="relative">
            {/* Enhanced background glow for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-cyan-900/50 to-blue-900/40 blur-2xl animate-pulse" />
            <div className="absolute inset-0 bg-black/20 blur-xl" />

            {/* Main title with sharp animation */}
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight animate-title-glow title-stroke">
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0s" }}>
                S
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.03s" }}>
                A
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.06s" }}>
                M
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.09s" }}>
                E
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.12s" }}>
                A
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.15s" }}>
                S
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.18s" }}>
                A
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.21s" }}>
                B
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.24s" }}>
                O
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.27s" }}>
                V
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.3s" }}>
                E
              </span>

              {/* Custom Logo */}
              <span className="inline-block mx-4 animate-sharp-logo-reveal" style={{ animationDelay: "0.35s" }}>
                <Image
                  src="/images/SAAT-Black-NoWords.png"
                  alt="SameAsAbove Logo"
                  width={125}
                  height={125}
                  className="inline-block logo-glow filter brightness-0 invert transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
                  style={{
                    filter: "brightness(0) invert(1) drop-shadow(0 0 25px #06b6d4) drop-shadow(0 0 50px #3b82f6)",
                  }}
                />
              </span>

              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.4s" }}>
                T
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.43s" }}>
                E
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.46s" }}>
                C
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.49s" }}>
                H
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.52s" }}>
                N
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.55s" }}>
                O
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.58s" }}>
                L
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.61s" }}>
                O
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.64s" }}>
                G
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.67s" }}>
                I
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.7s" }}>
                E
              </span>
              <span className="inline-block animate-sharp-slide-in text-gradient" style={{ animationDelay: "0.73s" }}>
                S
              </span>
            </h1>

            {/* Enhanced glowing underline */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-64 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse shadow-2xl shadow-cyan-300/60" />
            </div>
          </div>

          {/* Enhanced subtitle with better contrast */}
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up subtitle-shadow mb-12">
            <span className="text-cyan-300 font-bold text-shadow-sm">Where code meets poetry.</span>
            <span className="text-blue-200 font-semibold animate-pulse text-shadow-sm"> Explore the living archive</span>.
          </p>

        {/* True Honeycomb Grid */}
        <div className="flex justify-center mb-16">
          <div className="honeycomb-container">
            {honeycombRows.map((row, rowIndex) => (
              <div key={rowIndex} className="honeycomb-row">
                {row.map((app) => (
                  <Link key={app.id} href={app.href} className="hexagon-wrapper">
                    <div className="hexagon group">
                      <div className="hexagon-inner">
                        <div className="hexagon-content">
                          <app.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 group-hover:text-white transition-all duration-300 drop-shadow-lg" />
                          <span className="text-sm md:text-base font-medium text-blue-200 group-hover:text-white transition-all duration-300 mt-2 drop-shadow-sm">
                            {app.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

          {/* Enhanced decorative elements */}
          <div className="mt-32 flex justify-center items-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-cyan-300 animate-pulse" />
            <div className="w-3 h-3 bg-cyan-300 rounded-full animate-ping shadow-lg shadow-cyan-300/50" />
            <div className="relative">
              <Image
                src="/images/3_vertical_white__sameasabove.png"
                alt="SAAT Lego"
                width={150}
                height={150}
                className="filter brightness-0 invert transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
                style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 15px #06b6d4)" }}
              />
            </div>
            <div
              className="w-3 h-3 bg-blue-300 rounded-full animate-ping shadow-lg shadow-blue-300/50"
              style={{ animationDelay: "1s" }}
            />
            <div className="h-px w-16 bg-gradient-to-r from-cyan-300 via-blue-300 to-transparent animate-pulse" />
          </div>
        </div>


        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 text-blue-300/60 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>Powered by quantum computing</span>
            </div>
            <div className="w-px h-4 bg-blue-400/30" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              <span>Secured by blockchain</span>
            </div>
            <div className="w-px h-4 bg-blue-400/30" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
              <span>Enhanced by AI</span>
            </div>
          </div>
          {/* Quote at the bottom */}
          <div className="mt-8 mb-4">
            <blockquote className="italic text-lg text-gray-400">"No one is above the program."</blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
