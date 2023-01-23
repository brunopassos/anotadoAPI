import { Entity, Column, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("user")
export class User{
    @PrimaryColumn("uuid")
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}