'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is the Network Goods Institute?",
        answer: "NGI is a research organization building coordination mechanisms — protocols, incentives, and governance systems that help groups reason and decide together. We work at the intersection of mechanism design, collective intelligence, and economic infrastructure."
    },
    {
        question: "What are coordination mechanisms?",
        answer: "Systems that help groups make better decisions collectively. Markets are coordination mechanisms; so are courts, peer review, and elections. We design new ones for problems the existing ones don't solve well."
    },
    {
        question: "What do you mean by epistemic incentives?",
        answer: "Public reasoning today rewards conviction over calibration and narrative dominance over accuracy. Our work — the Negation Game, Litmus, Louie — builds infrastructure where being right and being willing to change your mind both pay off, and where the reasoning behind a decision can be surfaced, contested, and recorded."
    },
    {
        question: "What is the Negation Game?",
        answer: "A protocol for reasoned disagreement. Participants stake credibility on claims, and the system rewards those willing to update in light of stronger arguments. It's designed to make intellectual honesty economically rational."
    },
    {
        question: "How do Index Wallets work?",
        answer: "Index Wallets are programmable wallets that let people and institutions accept payment in values-embedded vector currencies. The result is a market mechanism for funding public goods — voluntary taxation that benefits the payer."
    },
    {
        question: "Who can use these mechanisms?",
        answer: "Researchers, civic institutions, funders, protocol teams, and communities trying to coordinate at scale. If you're working on a problem where collective reasoning or public-goods funding is the bottleneck, we'd like to hear from you."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="w-full max-w-3xl mx-auto px-6 md:px-10"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            <header className="mb-12 md:mb-16">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-4">
                    Questions
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                    Frequently asked
                </h2>
            </header>

            <div className="border-t border-rule">
                {faqData.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className="border-b border-rule"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <button
                                className="w-full py-6 text-left flex justify-between items-baseline gap-6 group"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3
                                    className="font-display text-xl md:text-2xl text-ink leading-snug group-hover:text-accent transition-colors"
                                    itemProp="name"
                                >
                                    {faq.question}
                                </h3>
                                <span
                                    className={`shrink-0 text-ink-muted text-2xl leading-none transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                                    aria-hidden="true"
                                >
                                    +
                                </span>
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <div className="overflow-hidden">
                                    <p
                                        className="text-ink-soft leading-relaxed text-base md:text-lg max-w-2xl"
                                        itemProp="text"
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
