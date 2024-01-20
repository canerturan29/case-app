'use client'

import { PokemonCard } from '@/components';
import { Pokemon } from '@/types';
import { List } from 'antd';
import { useState } from 'react';
import styles from './pokemonList.module.css';

export default function PokemonList({ count, pokemonList, pageSize, offset }: IProps) {


    const handlePageChange = (page: number) => {
        window.location.href = `/pokemon/list?offset=${(page - 1) * pageSize}`
    }
    return (
        <List
            className={styles.pokemonList}
            grid={grid}
            dataSource={pokemonList}
            pagination={{
                pageSize,
                total: count,
                showSizeChanger: false,
                onChange: handlePageChange,
                current: offset / pageSize + 1,
                position: 'bottom',
                responsive: true,
                style: { textAlign: 'center' },
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,




            }}
            renderItem={(item) => (
                <List.Item key={item.name}>
                    <PokemonCard item={item} />
                </List.Item>
            )}
        />
    );
}

interface IProps {
    pokemonList: Array<Pokemon>
    count: number
    offset: number
    pageSize: number
}

const grid = {
    gutter: 24,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    xxl: 5,
}