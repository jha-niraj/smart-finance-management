import React from 'react';
import "../styles/BudgetContainer.css";

const BudgetGuide = ({ content }) => {
    const renderSection = (section, index) => {
        const lines = section.split('\n');
        const heading = lines[0].replace(/\*\*/g, '').trim();

        const sectionContent = lines.slice(1)
            .filter(line => line.trim() !== '')
            .map(line => line.replace(/^\*\s*/, '').trim());

        return (
            <div key={index} className="budget-section">
                <h2 className="section-heading">{heading}</h2>
                <ul className="section-list">
                    {sectionContent.map((item, itemIndex) => (
                        <li key={itemIndex} className="section-item">{item}</li>
                    ))}
                </ul>
            </div>
        );
    };

    const sections = content.split('**Step ').filter(section => section.trim() !== '');
    const formattedSections = sections.map((section, index) =>
        renderSection(`**Step ${section}`, index)
    );

    const tipsMatch = content.match(/\*\*Tips:\*\*([\s\S]*)/);
    const tipsList = tipsMatch ?
        tipsMatch[1].split('\n')
            .filter(tip => tip.trim() !== '' && tip.startsWith('*'))
            .map(tip => tip.replace(/^\*\s*/, '').trim())
        : [];

    return (
        <div className="budget-guide">
            {formattedSections}

            {tipsList.length > 0 && (
                <div className="tips-section">
                    <h2 className="section-heading">Tips</h2>
                    <ul className="tips-list">
                        {tipsList.map((tip, index) => (
                            <li key={index} className="tip-item">{tip}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BudgetGuide;