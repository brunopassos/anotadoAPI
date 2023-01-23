import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("notes")
export class Note{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({nullable: true})
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}