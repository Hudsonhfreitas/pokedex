import { Dispatch, SetStateAction } from 'react';
import { FilterItem } from '../FilterItem';
import * as S from './styles';

type SelectMobileProps = {
    isSelectOpen: boolean;
    setIsSelectMobileOpen: Dispatch<SetStateAction<boolean>>;
}

export function SelectMobile({ isSelectOpen, setIsSelectMobileOpen }: SelectMobileProps)  {
    return (
        <S.Container isSelectOpen={isSelectOpen} >
            <button onClick={() => setIsSelectMobileOpen(!isSelectOpen)}>
              <span>Show</span>
              <strong>All</strong>
            </button>
            <ul>
                <li>
                    <FilterItem name='all' filterColor='all'/>
                </li>
                <li>
                    <FilterItem name='all' filterColor='all'/>
                </li>
                <li>
                    <FilterItem name='all' filterColor='all'/>
                </li>
                <li>
                    <FilterItem name='all' filterColor='all'/>
                </li>
                <li>
                    <FilterItem name='all' filterColor='all'/>
                </li>
                <li>
                    <FilterItem name='all' filterColor='all'/>
                </li>
                <li>
                    <FilterItem name='all' filterColor='all'/>
                </li>
                <li>
                    <FilterItem name='all' filterColor='all'/>
                </li>
            </ul>
        </S.Container>
    )
}