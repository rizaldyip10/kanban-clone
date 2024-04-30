import React from 'react'

interface TagProps {
    variant?: string;
    text?: string;
    className?: string;
}

const Tag: React.FC<TagProps> = ({ variant, text='Tag', className}) => {
    let bgColor = '';

    if (variant === 'green') {
        bgColor = '#CBDFD8';
    } else if (variant === 'red') {
        bgColor = '#FFDCE0';
    } else if (variant === 'purple') {
        bgColor = '#F0E7F6';
    } else if (variant === 'gray') {
        bgColor = '#E1E4E8';
    } else {
        bgColor = '#FFFFFF';
    }

    return (
        <div className={`w-fit h-[25px] rounded-lg px-3 py-1 ${className} items-center flex`}
        style={{ backgroundColor: bgColor }}
        >
            <p className='text-sm font-medium font-sf-pro text-[#4D4D4D]'>{ text }</p>
        </div>
    )
}

export default Tag