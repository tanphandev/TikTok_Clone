import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Button.module.scss';
const cx = classNames.bind(style);
function Button({
    to,
    href,
	disabled,
	rounded = false,
	def = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    className,
    iconLeft,
    iconRight,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

//remove event listenner when disable btn
	if(disabled)
	{
		Object.keys(props).forEach(key => {
			if(key.startsWith('on') && typeof props[key] === 'function')
			{
				delete props[key];
			}
		})
	}

    return (
        <Comp
            className={cx('wrapper', {
				rounded,
				disabled,
				def,
                primary,
                outline,
                small,
                large,
                [className]: className
            })}
            {...props}
        >
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}

        </Comp>
    );
}

export default Button;
