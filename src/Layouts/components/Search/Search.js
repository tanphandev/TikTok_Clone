import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { useTheme } from '@emotion/react';

import * as searchService from '~/services/searchService';
import { useDebounce } from '~/hooks';
import { Wrapper as WrapperResult } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/assets/icons';
import { Button } from '@mui/material';

const cx = classNames.bind(style);
function Search() {
    const theme = useTheme();
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const debounceValue = useDebounce(searchValue, 600);
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setShowLoading(true);
            try {
                const res = await searchService.search(debounceValue);
                setShowLoading(false);
                setSearchResult(res.data);
            } catch (error) {
                setSearchResult(false);
            }
        };

        fetchApi();
    }, [debounceValue]);

    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleShowResult = () => {
        setShowResult(true);
    };
    const handleSeachValue = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };
    return (
        // Using a wrapper <div> tag around the reference element
        // solves this by creating a new parentNode context.
        <>
            <TippyHeadless
                interactive
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <WrapperResult>
                            <h4 className={cx('search-title')}> Accounts</h4>
                            {searchResult.map((item) => (
                                <AccountItem key={item.id} data={item} />
                            ))}
                        </WrapperResult>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div style={{ backgroundColor: theme.palette.headerSearch.main }} className={cx('search')}>
                    <input
                        style={{
                            color: theme.palette.textColor.main,
                        }}
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleSeachValue}
                        onFocus={handleShowResult}
                    />
                    {!!searchValue && !showLoading && (
                        <FontAwesomeIcon
                            className={cx('clear')}
                            style={{ color: theme.palette.headerClear.main }}
                            icon={faXmarkCircle}
                            onClick={handleClear}
                        />
                    )}
                    {showLoading && (
                        <FontAwesomeIcon
                            style={{ color: theme.palette.headerClear.main }}
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
                    <Button
                        sx={{
                            minWidth: '52px!important',
                            backgroundColor: 'transparent',
                            color: theme.palette.headerClear.main,
                            '&::after': {
                                backgroundColor: theme.palette.searchDevider.main,
                            },
                        }}
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SearchIcon />
                    </Button>
                </div>
            </TippyHeadless>
        </>
    );
}

export default Search;
