import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import {v4 as uuid} from "uuid";
import { Note } from "./note.entity";
import { Exclude } from "class-transformer";

@Entity("user")
export class User{
    @PrimaryColumn("uuid")
    id: string;

    @Column({unique: true})
    email: string;

    @Column({nullable: true})
    @Exclude()
    password: string

    @OneToMany(() => Note, note => note.user)
    note: Note[]

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}