import { Image, Space, Tag } from 'antd';
import styles from './page.module.css';


export default function CardDetails({ data }: { data: any }) {

    return (
        <div className={styles.pokemon_container}>
            <div className={styles.card}>
                <h1 className={styles.pokemon_title}>{data.name}</h1>
                <Image
                    src={data.sprites?.other['official-artwork'].front_default}
                    width='200'
                    height='200'
                    alt={data.name}
                    preview={false}
                />
                <div className={styles.base_experience}><p>Power</p>{data.base_experience}</div>
                <div>
                    <h3>Abilities</h3>
                    <Space size={[0, 8]} wrap> {data.abilities?.map((item: any, index: any) => (
                        <Tag color="success" key={index}>{item.ability.name}</Tag>
                    ))}
                    </Space>
                </div>
                <div>
                    <h3>Type</h3>
                    <div className={styles.types_container}>
                        {data.types?.map((item: any, index: any) => (
                            <span
                                key={index}
                                className={`${styles.type} ${styles['type_' + item.type.name]}`}
                            >
                                {item.type.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={styles.data_container}>
                        <div className={styles.data_height}>
                            <h4>Height</h4>
                            <p>{data.height * 10} cm</p>
                        </div>
                        <div className={styles.data_weight}>
                            <h4>Weight</h4>
                            <p>{data.weight / 10} Kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
