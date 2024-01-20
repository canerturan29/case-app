"use client"

import { PokemonService } from '@/common';
import { Header } from '@/components';
import CardDetails from '@/components/CardDetails';
import { PageProps } from '@/types';


export default async function DetailPage({ params }: PageProps<{ name: string }>) {
    const data = await PokemonService.getPokemonDetails(params.name);

    return (
        <>
            <Header shop={true} />
            <div style={{ width: "100%", height: "100%" }}>
                <CardDetails data={data} />
            </div>

        </>
    );
}