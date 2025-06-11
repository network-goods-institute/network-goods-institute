export function Contact() {
    return (
        <section id="contact" className="w-full max-w-4xl mx-auto px-8" itemScope itemType="https://schema.org/Organization">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    Get In Touch
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-blue-300">Connect With Us</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        Reach out via email to discuss our research and projects.
                    </p>

                    <a
                        href="mailto:connor@networkgoods.institute"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors font-medium text-lg"
                        aria-label="Email Network Goods Institute"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Us
                    </a>
                </div>
            </div>

            <meta itemProp="name" content="Network Goods Institute" />
            <meta itemProp="description" content="Network Goods Institute builds coordination mechanisms for collective intelligence and externality pricing using counterfactual reasoning, economic incentives, and epistemic values." />
            <meta itemProp="url" content="https://networkgoods.institute" />
            <meta itemProp="email" content="connor@networkgoods.institute" />
        </section>
    );
} 