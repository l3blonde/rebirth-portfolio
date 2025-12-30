import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function CVPage() {
    return (
        <div className="min-h-screen bg-[#f5f1ec] py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#2e2a2b] hover:text-[#bd9b60] transition-colors mb-8"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Portfolio
                </Link>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl md:text-5xl font-serif text-[#2e2a2b]">Curriculum Vitae</h1>
                        <a
                            href="/CV-Marianne-Dec2025.pdf"
                            download="CV-Marianne-Legrelle.pdf"
                            className="flex items-center gap-2 bg-[#bd9b60] text-white px-6 py-3 rounded-full hover:bg-[#a88950] transition-colors"
                        >
                            <Download className="w-5 h-5" />
                            Download PDF
                        </a>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-serif text-[#2e2a2b] mb-4">Marianne Legrelle Poliakov</h2>
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
                                    <p className="text-sm text-[#2e2a2b]/60 mb-2">September 2023 - present</p>
                                    <p className="text-[#2e2a2b]/80 leading-relaxed">
                                        Currently in the second year of a BA in Digital Product, specialising in computer science, software
                                        development, and UX/UI design. Completed academic projects using HTML5, TypeScript, JavaScript,
                                        React, Vue, Next.js, Python, and Unity 3D. Building strong foundations in full-stack development,
                                        agile workflows, API integration, and human-centred design.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-[#2e2a2b] mb-1">
                                        Cloud Solutions Specialist at GlobalDots (London, UK)
                                    </h4>
                                    <p className="text-sm text-[#2e2a2b]/60 mb-2">March 2020 - August 2023</p>
                                    <p className="text-[#2e2a2b]/80 leading-relaxed">
                                        Supported the planning and delivery of cloud-based performance and security solutions across the
                                        EMEA region, including CDN, WAF, DDoS protection, and DevOps tooling. Gained practical knowledge of
                                        content delivery networks, edge computing, cloud security protocols, and modern SaaS deployment
                                        practices.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-[#2e2a2b] mb-1">
                                        Tech PR Associate at Blonde 2.0, IOTA (Tel Aviv & Berlin)
                                    </h4>
                                    <p className="text-sm text-[#2e2a2b]/60 mb-2">November 2018 - March 2020</p>
                                    <p className="text-[#2e2a2b]/80 leading-relaxed">
                                        Wrote tech articles and pitched press releases in Chinese and English, cultivated relationships with
                                        influential professionals. Partnered with Volkswagen, DnB, Bosch.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-[#2e2a2b] mb-1">
                                        Community Moderator at Kik Interactive, Inc. (Waterloo, Canada)
                                    </h4>
                                    <p className="text-sm text-[#2e2a2b]/60 mb-2">September 2016 - November 2018</p>
                                    <p className="text-[#2e2a2b]/80 leading-relaxed">
                                        Managed media campaign and live support for Chinese customers and community for the Kin TDE (ICO
                                        raising nearly $100M - Pantera Capital)
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
                                    <p className="text-sm text-[#2e2a2b]/60">Mechelen, Belgium | 2023 – 2026 (expected)</p>
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
                                Next.js, REST APIs, Figma, Unity 3D, Adobe Suite
                            </p>
                            <p className="text-[#2e2a2b]/80 leading-relaxed">
                                Fluent in <strong>English, French, Chinese, and Russian</strong>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
