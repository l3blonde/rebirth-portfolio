"use client"

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function CVPage() {
    return (
        <div className="min-h-screen bg-[#f5f1ec] py-12 px-4 md:px-8 print:bg-white print:py-0 print:px-0">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#2e2a2b] hover:text-[#bd9b60] transition-colors mb-8 print:hidden"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Portfolio
                </Link>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 print:shadow-none print:p-0">
                    <div className="flex items-center justify-between mb-8 print:mb-4">
                        <h1 className="text-4xl md:text-5xl font-serif text-[#2e2a2b]">Curriculum Vitae</h1>
                        <button
                            onClick={() => window.print()}
                            className="flex items-center gap-2 bg-[#bd9b60] text-white px-6 py-3 rounded-[14px] hover:bg-[#a88950] transition-colors print:hidden font-mono text-xs font-semibold"
                        >
                            <Download className="w-4 h-4" />
                            Save as PDF
                        </button>
                    </div>

                     <div className="space-y-8">
                         <section>
                             <h2 className="text-2xl font-serif text-[#2e2a2b] mb-4">Marianne L.-P.</h2>
                             <div className="text-[#2e2a2b]/80 space-y-1">
                                 <p>marilegrelle@gmail.com</p>
                                 <p>+32 492 40 50 12</p>
                             </div>
                         </section>

                         <section>
                             <h3 className="text-xl font-serif text-[#2e2a2b] mb-3 border-b border-[#bd9b60] pb-2">
                                 Working Experience
                             </h3>
                             <div className="space-y-6">
                                 <div>
                                     <h4 className="font-semibold text-[#2e2a2b] mb-1">
                                         Student – BA Digital Product (Mechelen, Belgium)
                                     </h4>
                                     <p className="text-sm text-[#2e2a2b]/60 mb-2">2023 – Present</p>
                                     <p className="text-[#2e2a2b]/80 leading-relaxed">
                                         Specialising in software engineering, computational systems, and UX architectures. Developed core foundations in data structures, algorithms, and human-computer interaction (HCI). Developed academic projects utilizing Python (machine learning score-matching algorithms), TypeScript/Next.js (interface state machines), and WebGL/Three.js (computational geometry visualizers).
                                     </p>
                                 </div>

                                 <div>
                                     <h4 className="font-semibold text-[#2e2a2b] mb-1">
                                         Cloud Solutions Specialist at GlobalDots (London, UK)
                                     </h4>
                                     <p className="text-sm text-[#2e2a2b]/60 mb-2">2020 – 2023</p>
                                     <p className="text-[#2e2a2b]/80 leading-relaxed">
                                         Collaborated on the architectural planning and deployment of distributed systems, edge computing, content delivery networks (CDNs), and cloud security infrastructures. Gained practical experience in network protocols, systems performance optimization, and scalable server backend configuration.
                                     </p>
                                 </div>

                                 <div>
                                     <h4 className="font-semibold text-[#2e2a2b] mb-1">
                                         Community Moderator – Kik Interactive / Kin (Waterloo, Canada)
                                     </h4>
                                     <p className="text-sm text-[#2e2a2b]/60 mb-2">2016 – 2018</p>
                                     <p className="text-[#2e2a2b]/80 leading-relaxed">
                                         Coordinated developer support and live communications for the launch of a high-throughput blockchain token environment (Kin TDE).
                                     </p>
                                 </div>
                             </div>
                         </section>

                         <section>
                             <h3 className="text-xl font-serif text-[#2e2a2b] mb-3 border-b border-[#bd9b60] pb-2">Education</h3>
                             <div className="space-y-4">
                                 <div>
                                     <h4 className="font-semibold text-[#2e2a2b]">
                                         Thomas More University of Applied Sciences – BA Digital Product
                                     </h4>
                                     <p className="text-sm text-[#2e2a2b]/60">Mechelen, Belgium | 2023 – Present</p>
                                 </div>
                                 <div>
                                     <h4 className="font-semibold text-[#2e2a2b]">
                                         Beijing Language and Culture University – MA in Chinese Studies
                                     </h4>
                                     <p className="text-sm text-[#2e2a2b]/60">Beijing, China | 2010 – 2016</p>
                                 </div>
                             </div>
                         </section>

                         <section>
                             <h3 className="text-xl font-serif text-[#2e2a2b] mb-3 border-b border-[#bd9b60] pb-2">
                                 Technical Skills & Languages
                             </h3>
                             <p className="text-[#2e2a2b]/80 leading-relaxed mb-4">
                                 Python, PyTorch, NumPy, Pandas, multimodal & vision models, JavaScript (ES6+), TypeScript, Node.js,
                                 Next.js, REST APIs, Figma, WebGL, Unity 3D
                             </p>
                             <p className="text-[#2e2a2b]/80 leading-relaxed">
                                 Languages: English, French, Chinese, Russian
                             </p>
                         </section>
                     </div>
                 </div>
            </div>
        </div>
    )
}
