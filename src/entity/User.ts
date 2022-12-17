import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn({type: 'int', name: 'id'})
    id: number

    @Column({type: 'char', name:'device_token', length: "45"})
    device_token: string

    @Column()
    lat: string

    @Column()
    lon: string


}
