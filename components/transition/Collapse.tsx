import React, { useEffect, useRef, useState } from 'react';

export interface CollapseProp {
    isOpen: boolean;
    className?: string;
    minHeight?: number;
}

const Collapse: React.FC<CollapseProp> = ({ isOpen, minHeight = 0, children, className }) => {
    const [childHeight, setChildHeight] = useState<number>(0);
    const childRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (childRef && childRef.current) {
            setChildHeight(childRef.current.scrollHeight + 24);
        }
    }, [childRef]);

    return (
        <div
            className={className}
            style={{
                overflow: isOpen ? 'auto' : 'hidden',
                transition: '0.8s max-height',
                maxHeight: isOpen ? childHeight : minHeight,
            }}
        >
            <div ref={childRef} className={'overflow-visible'}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
