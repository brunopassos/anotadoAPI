import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import {v4 as uuid} from "uuid";
import { Note } from "./note.entity";

@Entity("user")
export class User{
    @PrimaryColumn("uuid")
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string

    @OneToMany(() => Note, note => note.user)
    note: Note[]

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}