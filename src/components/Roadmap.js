import React, { useState } from "react";

const phases = [
    {
        id: 1, title: "Phase 1: Laying the Foundation (Q4 2024-Q1 2025)",
        content:
            <div className="font-semibold">
                <p className="md:my-12 my-6 text-lg">Key Focus: Building the Core Platform and Community</p>

                <p className="text-lg">Platform Development</p>
                <ul className="list-disc pl-5 md:mb-12 mb-5">
                    <li>
                        Release of the X-Nova AI Agent Engage-to-Earn dApp on the Ethereum blockchain.
                    </li>
                    <li>
                        Release the initial version of the Custom AI Bot creation platform for Telegram users.
                    </li>
                    <li>
                        Integrate wallet functionality for seamless rewards and transactions to X-Nova AI Agent Engage-to-Earn dApp.
                    </li>
                </ul>


                <p className="text-lg">AI Agent Framework</p>
                <ul className="list-disc pl-5">
                    <li>
                        Develop basic AI agent templates with customizable features.
                    </li>
                    <li>
                        Introduce automated task execution and engagement capabilities for bots.
                    </li>
                </ul>

                <p className="text-lg pt-2">Community Building</p>
                <ul className="list-disc pl-5">
                    <li>
                        Launch the $XNAI utility token to power the ecosystem and reward users.
                    </li>
                    <li>
                        Kick off marketing campaigns targeting early adopters and influencers.
                    </li>
                    <li>
                        Launch the Engage-to-Earn Ai Agent rewards program tied to user activity on X.com.
                    </li>
                </ul>
            </div>

    },

    {
        id: 2, title: "Phase 2: Growth and Expansion (Q1 - Q2 2025)",
        content:
            <div className="font-semibold">
                <p className="md:my-12 my-6 text-lg">Key Focus: Feature Expansion and Scaling Adoption</p>

                <p className="text-lg">Platform Enhancements</p>
                <ul className="list-disc pl-5 md:mb-12 mb-5">
                    <li>
                        Introduce advanced customization tools for AI agents, including natural language processing and multi-tasking capabilities.
                    </li>
                    <li>
                        Enable third-party API integration for expanded use cases
                    </li>
                    <li>
                        Deploy user-friendly dashboards for tracking AI agent performance and rewards.
                    </li>
                </ul>


                <p className="text-lg">AI Agent Framework</p>
                <ul className="list-disc pl-5">
                    <li>
                        Develop basic AI agent templates with customizable features.
                    </li>
                    <li>
                        Introduce automated task execution and engagement capabilities for bots.
                    </li>
                </ul>

                <p className="text-lg pt-2">Blockchain Expansion</p>
                <ul className="list-disc pl-5">
                    <li>
                        Implement multi-chain support for Solana, Binance Smart Chain, Arbitrum and other popular blockchains
                    </li>
                    <li>
                        Community Engagement
                    </li>
                    <li>
                        Launch interactive community challenges and reward campaigns to boost adoption.
                    </li>
                    <li>
                        Introduce an ambassador program to incentivize community leaders.
                    </li>
                    <li>
                        Begin localized marketing efforts to reach non-English-speaking regions.
                    </li>
                </ul>
            </div>
    },
    {
        id: 3, title: "Phase 3: Mass Adoption and Ecosystem Growth (Q2 - Q3 2025)",
        content:
            <div className="font-semibold">
                <p className="md:my-12 my-6 text-lg">Key Focus: Advanced Features and Partnerships</p>
                <ul className="list-disc pl-5">
                    <li>
                        AI Agent Ecosystem
                    </li>
                    <li>
                        Launch collaborative AI agent capabilities, allowing agents to interact and work together.
                    </li>
                    <li>
                        Introduce decentralized learning models for agents to improve from user interactions.
                    </li>
                    <li>
                        Partnerships and Integrations
                    </li>
                    <li>
                        Partner with businesses and other blockchain projects for collaborative opportunities.
                    </li>
                    <li>
                        Integrate AI agents with external services like CRMs, e-commerce platforms, and productivity tools.
                    </li>
                    <li>
                        Community Initiatives
                    </li>
                    <li>
                        Expand the Engage-to-Earn program with higher-value rewards and special events
                    </li>
                </ul>
            </div>

    },
    {
        id: 4, title: "Phase 4: Decentralization and Long-Term Sustainability (Q3 - Q4 2025)",
        content:
            <div className="font-semibold">
                <p className="md:my-12 my-6 text-lg">Key Focus: Governance, Ecosystem Expansion, and Global Impact</p>
                <ul className="list-disc pl-5">
                    <li>
                        Decentralized Governance
                    </li>
                    <li>
                        Transition to a DAO model, empowering the community to propose and vote on platform upgrades and initiatives.
                    </li>
                    <li>
                        Introduce decentralized learning models for agents to improve from user interactions.
                    </li>
                    <li>
                        Enable revenue-sharing models for developers creating popular AI agent templates
                    </li>
                    <li>
                        Global Scaling
                    </li>
                    <li>
                        Localize the platform for additional languages and regions
                    </li>
                    <li>
                        Expand marketing efforts to onboard users from diverse sectors and industries.
                    </li>
                    <li>
                        Continuous Innovation
                    </li>
                    <li>
                        Introduce new features based on community feedback and emerging AI technologies.
                    </li>
                </ul>
            </div>
    },
];

const Roadmap = () => {
    const [selectedPhase, setSelectedPhase] = useState(1);

    return (
        <div className="roadmap-container">

            <div className="content">
                {phases.map((phase) => (
                    <div
                        key={phase.id}
                        className={`box lg:h-[88vh] md:p-12 p-4 font-bricolage space-y-5 mt-5 
                            ${selectedPhase === phase.id ? "active" : ""}`}
                    >
                        <h2 className="md:text-3xl text-xl font-semibold">{phase.title}</h2>
                        <p>{phase.content}</p>
                    </div>
                ))}
            </div>

            <div className="timeline">
                {phases.map((phase) => (
                    <div
                        key={phase.id}
                        className={`circle ${selectedPhase === phase.id ? "highlight" : ""}`}
                        onClick={() => setSelectedPhase(phase.id)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
