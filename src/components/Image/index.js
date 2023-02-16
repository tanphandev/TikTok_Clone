import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import style from './Image.module.scss';
import images from '~/assets/images';

const Image = ({ className, src, alt, fallBack:customFallBack = images.noImage,...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <img
            className={classNames(style.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
};
export default forwardRef(Image);
