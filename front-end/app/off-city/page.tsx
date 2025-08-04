import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Calendar, Eye } from "lucide-react"

const Projects = [
  {   id: 1,
      title: "photo vortex component",
      description:
        "TBD",
      image: "/placeholder.svg?height=400&width=600&text=Digital+Shadows",
      date: "TBD 2025",
      views: "0",
    },
    { id: 2,
      title: "data aesthetics",
      description:
        "TBD",
      image: "/placeholder.svg?height=400&width=600&text=Digital+Shadows",
      date: "TBD 2025",
      views: "0",
    },
    { id: 3,
      title: "code behind the portrait",
      description:
        "TBD",
      image: "/placeholder.svg?height=400&width=600&text=Digital+Shadows",
      date: "TBD 2025",
      views: "0",
    },
    // id: 1,
    // title: "Digital Shadows",
    // description:
    //   "An exploration of light and darkness in the digital realm. This piece examines how shadows can exist in virtual spaces, creating depth and emotion through the absence of light. The interplay between illuminated pixels and void spaces tells a story of modern isolation.",
    // image: "/placeholder.svg?height=400&width=600&text=Digital+Shadows",
    // date: "2024",
    // views: "1.2k",
  // },
  // {
  //   id: 2,
  //   title: "Fractured Reality",
  //   description:
  //     "A haunting representation of broken dreams and shattered expectations. Using fragmented geometric forms to convey the complexity of human emotion in a disconnected world. Each fragment represents a memory, a hope, or a fear that has been displaced by digital transformation.",
  //   image: "/placeholder.svg?height=400&width=600&text=Fractured+Reality",
  //   date: "2024",
  //   views: "856",
  // },
  // {
  //   id: 3,
  //   title: "Void Whispers",
  //   description:
  //     "Minimalist composition exploring the beauty found in emptiness. The piece invites viewers to find meaning in the spaces between, where silence speaks louder than noise. In our hyperconnected world, this work celebrates the power of digital minimalism and intentional absence.",
  //   image: "/placeholder.svg?height=400&width=600&text=Void+Whispers",
  //   date: "2024",
  //   views: "2.1k",
  // },
  // {
  //   id: 4,
  //   title: "Midnight Frequencies",
  //   description:
  //     "A visual interpretation of sound waves traveling through the darkness. This piece captures the invisible energy that surrounds us, made visible through careful manipulation of form and shadow. The work explores how digital signals create their own form of music in the electromagnetic spectrum.",
  //   image: "/placeholder.svg?height=400&width=600&text=Midnight+Frequencies",
  //   date: "2023",
  //   views: "743",
  // },
  // {
  //   id: 5,
  //   title: "Forgotten Algorithms",
  //   description:
  //     "A commentary on obsolete code and abandoned digital projects. This artwork represents the digital graveyard where forgotten algorithms rest, their purpose lost to time. Each line and curve symbolizes the countless hours of human creativity that have been rendered obsolete by technological progress.",
  //   image: "/placeholder.svg?height=400&width=600&text=Forgotten+Algorithms",
  //   date: "2023",
  //   views: "1.5k",
  // },
  // {
  //   id: 6,
  //   title: "Neural Pathways",
  //   description:
  //     "An abstract visualization of artificial intelligence learning patterns. This piece explores the hidden beauty within machine learning processes, where data flows like synapses in a digital brain. The organic curves contrast with the rigid logic of computational thinking.",
  //   image: "/placeholder.svg?height=400&width=600&text=Neural+Pathways",
  //   date: "2023",
  //   views: "967",
  // },
]

export default function OffCityPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to SAMEASABOVE Technologies</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Off City</h1>
            <div className="w-32" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            A collection of dark and contemplative digital artworks exploring themes of isolation, technology, and the
            human condition in our increasingly digital age.
          </p>
          <div className="flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          </div>
        </div>

        {/* Art Projects Grid */}
        <div className="space-y-20">
          {Projects.map((project, index) => (
            <article
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-center group`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay stats */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center space-x-1 text-gray-300 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-300 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <ExternalLink className="w-5 h-5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="h-px w-16 bg-gradient-to-r from-gray-600 to-transparent" />
                </div>

                <p className="text-gray-400 leading-relaxed text-lg">{project.description}</p>

                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gray-600 rounded-full" />
                    <span>Digital Art</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gray-600 rounded-full" />
                    <span>Conceptual</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gray-600 rounded-full" />
                    <span>Interactive</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm mb-4">
            All artworks are original digital creations exploring the intersection of technology and human emotion.
          </p>
          <p className="text-gray-600 text-xs">© 2025 Off City • So it goes.</p>
        </div>
      </div>
    </div>
  )
}
