import React, { useCallback, useState } from 'react';
import { A11yHidden } from '@/components';
import { GlobalNavItemProps, GlobalNavProps } from './GlobalNav.types';
import classNames from 'classnames';

import {
  StyledNav,
  StyledGlobalNav,
  StyledGlobalNavItems,
  StyledLink,
  StyledButton,
} from './GlobalNav.styled';
import { SubMenu, SvgIcon } from '@/components';

// TODO:
/**
 * - Function
 * - [x] more-button에 호버시 SubMenu display: block;
 * - [x] more-button에 마우스가 떠날 때 SubMenu display: none;
 * - [x] more-button 클릭시 SubMenu display:block
 * - [x] more-button을 다시 클릭하거나 SubMenu 외부를 클릭할 때 display:none;
 * - [ ] 키보드로 subMenu 접근 및 탐색 가능
 * - [ ] focus 상태일 때 외부를 클릭하지 않는 한 active 유지
 * - Style
 * - [x] 호버시 스르르 나타나도록 애니메이션 주기
 * - [x] 높이 지정 고민하기
 */

export function GlobalNav({ className, isMobile = false }: GlobalNavProps) {
  const listItems: GlobalNavItemProps[] = [
    { id: 'reactions', href: '/search/reactions', text: 'Reactions' },
    {
      id: 'entertainment',
      href: '/search/entertainment',
      text: 'Entertainment',
    },
    { id: 'sports', href: '/search/sports', text: 'Sports' },
    { id: 'stickers', href: '/search/stickers', text: 'Stickers' },
    { id: 'artists', href: '/search/artists', text: 'Artists' },
    { id: 'more', href: '', text: '...' },
  ];

  const [isActive, setIsActive] = useState(false);

  // TODO: 기기가 모바일일 때 클릭 이벤트 고려 해야 함

  const handleBlur = useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsActive(false);
    }
  }, []);

  const handleMouseEnter = useCallback((e) => {
    setIsActive(true);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    setIsActive(false);
  }, []);

  return (
    <StyledNav
      aria-labelledby="mainmenulabel"
      onBlur={handleBlur}
      onMouseLeave={handleMouseLeave}
    >
      {isMobile ? (
        <>
          <button
            onMouseEnter={handleMouseEnter}
            className={classNames('more-button', className)}
            aria-label="sub menu"
          >
            <SvgIcon id="list" height={35} width={35} />
          </button>
          {isActive && (
            <SubMenu
              isMobile={isMobile}
              className={classNames('isMobile', className)}
            />
          )}
        </>
      ) : (
        <>
          <A11yHidden as="h2">Main menu</A11yHidden>
          <StyledGlobalNav>
            {listItems.map(({ id, href, text }: GlobalNavItemProps) => (
              <StyledGlobalNavItems key={id}>
                {id === 'more' ? (
                  <>
                    <StyledButton
                      onMouseEnter={handleMouseEnter}
                      className={classNames('more-button', className)}
                    >
                      <span>{text}</span>
                    </StyledButton>
                    {isActive && <SubMenu className={className} />}
                  </>
                ) : (
                  <StyledLink to={href}>
                    <span>{text}</span>
                  </StyledLink>
                )}
              </StyledGlobalNavItems>
            ))}
          </StyledGlobalNav>
        </>
      )}
    </StyledNav>
  );
}
