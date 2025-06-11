'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is the Network Goods Institute?",
        answer: "The Network Goods Institute is a research organization focused on building coordination mechanisms for collective intelligence and externality pricing using counterfactual reasoning, economic incentives, and epistemic values."
    },
    {
        question: "What are coordination mechanisms?",
        answer: "Coordination mechanisms are systems designed to help groups make better decisions collectively. They include protocols, incentive structures, and governance systems that align individual actions with collective goals."
    },
    {
        question: "How does counterfactual reasoning work?",
        answer: "Counterfactual reasoning involves thinking about 'what would have happened otherwise' - analyzing alternative scenarios to better understand causation and make more informed decisions about resource allocation and policy."
    },
    {
        question: "What is the Negation Game?",
        answer: "The Negation Game is a protocol layer for reasoned disagreement that uses economic incentives and epistemic values to reward intellectual honesty and evidence-based reasoning in discussions."
    },
    {
        question: "How do Index Wallets work?",
        answer: "Index Wallets are programmable wallets that enable voluntary taxation through economic mechanisms, creating wealth-equalizing dynamics while funding public goods through selfish taxation principles."
    },
    {
        question: "Who can use these coordination mechanisms?",
        answer: "Our coordination mechanisms are designed for organizations, communities, and individuals interested in improving group decision-making, funding public goods, or implementing more effective governance systems."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full max-w-4xl mx-auto px-8" itemScope itemType="https://schema.org/FAQPage">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <button
                            className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <h3 className="text-xl font-semibold text-gray-900" itemProp="name">
                                {faq.question}
                            </h3>
                            <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                                <svg
                                    className="w-6 h-6 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        <div
                            id={`faq-answer-${index}`}
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                                }`}
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                        >
                            <div className="px-8">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 