import React from 'react'
interface TitleProps {
    title: string;
}
export const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="m-section__header text-center mb-8">
            <h2 className="m-section__heading text-2xl font-bold animate--fade-in">
                {title}
            </h2>
        </div>
    )
}
