import axios from "axios";
import { ResourceResponse, Pokemon, ResourceRequestParams } from "@/types";

export class PokemonService {
    static api = axios.create({
        baseURL: process.env.POKEMON_BASE_URL,
    })

    static async getResourceList({ limit = 10, offset = 0, resourceType }: ResourceRequestParams) {
        const response = await this.api.get<ResourceResponse>(`/${resourceType}`, { params: { limit, offset } })
        return response.data
    }

    static async getPokemonListWithDetails(params: Omit<ResourceRequestParams, "resourceType">) {
        const pokemonList = await this.getResourceList({ ...params, resourceType: "pokemon" })

        const pokemonListWithDetails = await Promise.all(pokemonList.results.map(async (pokemon) => {
            return this.getPokemonDetails(pokemon.name)
        }))

        return { pokemonList: pokemonListWithDetails, count: pokemonList.count }
    }

    static async getPokemonDetails(id: string) {
        const response = await this.api.get<Pokemon>(`/pokemon/${id}`)
        return response.data
    }
}