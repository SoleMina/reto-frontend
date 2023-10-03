import React, { useEffect, useState } from 'react';
import styles from './Search.module.css';
import Image from 'next/image';
import items from '@/dogs.json';
import Link from 'next/link';

const Search = () => {
  const [showText, setShowText] = useState<Boolean>(false);
  const [term, setTerm] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const filteredWords = items.filter((word) =>
    word.name.toLowerCase().startsWith(term.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
    setTimeout(() => {
      setTerm(e.target.value);
    }, 500);
  };

  const handleClose = () => {
    setTerm('');
    setValue('');
  };

  useEffect(() => {
    console.log(term);
  }, [term]);

  return (
    <div>
      <h1 className={styles.headliner}>Search</h1>
      <div className={styles.searchbar}>
        <div className={styles.search}>
          <div className={styles.search__header}>
            <input
              type="text"
              value={value}
              placeholder="Type here"
              onChange={handleChange}
            />
            <span className={styles.close} onClick={handleClose}>
              x
            </span>
            <div className={styles.icon}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div className={styles.search__results}>
            <div className={styles.search__box}>
              {items.length > 0 ? (
                filteredWords.length > 0 ? (
                  filteredWords.map((item) => {
                    return (
                      <Link href={`/pet/${item.id}`} key={item.name}>
                        <div className={styles.search__item}>
                          <Image
                            src={item.url}
                            width={90}
                            height={80}
                            alt="Image result"
                            style={{
                              objectFit: 'cover',
                              borderRadius: '20px',
                            }}
                          />
                          <div className={styles.search__info}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p>No results found</p>
                )
              ) : (
                <p>No results found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
