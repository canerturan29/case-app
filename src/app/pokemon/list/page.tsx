
import { PokemonService } from '@/common'
import { Header } from '@/components'
import { PageProps } from '@/types'
import PokemonList from './PokemonList'


export default async function PokemonListPage({ searchParams }: PageProps<undefined, { offset: string }>) {
    const pageSize = Number(process.env.PAGE_SIZE)
    const offset = Number(searchParams.offset || 0)
    const { pokemonList, count } = await PokemonService.getPokemonListWithDetails({ limit: pageSize, offset })

    return (
        <div>
            <Header shop={true} />
            <PokemonList
                pokemonList={pokemonList}
                count={count}
                pageSize={pageSize}
                offset={offset}
            />
        </div>
    )
}


