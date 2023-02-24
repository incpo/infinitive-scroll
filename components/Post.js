import React from 'react';
import Image from "next/image";

const Post = ({item}) => {
    const src = 'http://localhost:7000/' + 'gallery/' + item.img
    return (
        <div className='relative w-[500px] cursor-pointer hover:opacity-50 easy-in duration-300'>
            <Image className='object-contain pointer-events-none' width={400} height={200} src={src} alt={item.title} style={{ height: '100%', width: '100%' }}/>
            <div className='justify-between'>
                <span className='text-primary-white'>{item.title}</span>
                <span className='text-primary-666'>{item.id}</span>
            </div>
        </div>
    );
};

export default Post;