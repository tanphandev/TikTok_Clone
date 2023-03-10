import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Search.module.scss';

import * as searchService from '~/services/searchService';
import { useDebounce } from '~/hooks';
import { Wrapper as WrapperResult } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/icons';

const cx = classNames.bind(style);
function Search() {
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

    const handleSeachValue = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };
    return (
        // Using a wrapper <div> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
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
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleSeachValue}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && !showLoading && (
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} onClick={handleClear} />
                        </button>
                    )}
                    {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
