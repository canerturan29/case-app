import { Pokemon } from '@/types'
import Link from 'next/link'
import Styles from './pokemonCard.module.css'

export default function PokemonCard({ item, shop }: IProps) {

    return (
        <div className={Styles.card}>
            <div className={Styles.cover} style={{ backgroundImage: `url(${item.sprites.other['official-artwork'].front_default})` }}>
                <h1>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
                <span className={Styles.price}>{item.id}</span>
                <div className={Styles.cardBack} style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png)" }}>
                    {!shop ? <Link href={`/pokemon/${item.name}`}>View detail</Link> : <></>}
                </div>
            </div>
        </div>

    )
}

interface IProps {
    item: Pokemon
    shop?: boolean
}